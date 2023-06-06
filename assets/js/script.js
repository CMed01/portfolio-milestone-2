// Options for the hangman
const gameQuestion = [
    {
        question: "Name this golfer",
        hangman: "jordan spieth",
        hint1: "Studied at University of Texas",
        hint2: "Won his first major in 2015"
    },
    {
        question: "Golf terminology",
        hangman: "albatross",
        hint1: "nickname for a score",
        hint2: "type of bird"
    },
    {
        question: "Golf terminology",
        hangman: "bogey",
        hint1: "green and nasty",
        hint2: "you can pick it from your nose"
    },
    {
        question: "Name this golfer",
        hangman: "rory mcilroy",
        hint1: "has been no.1 golfer in the world",
        hint2: "From Northern Ireland"
    }, {
        question: "Name this golfer",
        hangman: "jon rahm",
        hint1: "studied at Arizona state",
        hint2: "won the Masters in 2023"
    }, {
        question: "Golf equipment brand",
        hangman: "srixon",
        hint1: "japenese brand",
        hint2: "Hideki and Brooks currently use their clubs"
    }, {
        question: "Golf equipment brand",
        hangman: "taylormade",
        hint1: "american brand",
        hint2: "driver models include the Aeroburner and M1"
    }, {
        question: "Golf equipment brand",
        hangman: "titliest",
        hint1: "company founded in 1932 by Phil Young",
        hint2: "produce the most used golf ball on tour"
    }, {
        question: "Name this golfer",
        hangman: "greg norman",
        hint1: "won The Open in 1986 and 1993",
        hint2: "also known as the Shark"
    }
]

const letterContainer = document.getElementById("letter-container");
const questionHangman = document.getElementById("hangman-container");
const questionQuestion = document.getElementById("question-container");
const newGameButton = document.getElementsByClassName("new-game-btn");
const newGameContainer = document.getElementById("new-game-container");
const livesContainer = document.getElementById("lives-container");
const lifeImage = document.getElementById("life-images");
const totalPoints = document.getElementById("total-points");

let winCount = 0;
let loseCount = 0;
let spaceCount = 0;
let levelCount = 0;

let chosenWord = "";

document.addEventListener("DOMContentLoaded", pageLoad())

/**
 * Loads backgroud function for game on page load
 */
function pageLoad() {
    winCount = 0;
    loseCount = 0;
    spaceCount = 0;
    levelCount = 0;

    letterContainer.innerHTML = "";
}

/**
 * On click of new game button, the hangman will begin.
 */
function startGame() {
    document.addEventListener("click", generateRandomHangman());

    createLifeIcons();

    if (newGameContainer.children.length > 1) {
        newGameContainer.removeChild(newGameContainer.children[1]);
    }

    restartButton();

    let dash = document.getElementsByClassName("hangman-selection");
    let btnArray = chosenWord.split("");

    // Replaces "_" where a space is back to a " ". Add 1 to the space count.
    if (btnArray.includes(" ")) {
        btnArray.forEach(function checkLetters(char, index) {
            if (char === " ") {
                dash[index].innerText = char;
                spaceCount += 1;
            }
        });
    }

    // Add hangman user input letters to letter container
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
        // This will return an array of the letters contained in the hanagman


        button.addEventListener("click", function () { // Check if button is equal to letter in hangman then display in text.
            if (btnArray.includes(button.innerText)) {
                btnArray.forEach(function checkLetters(char, index) {
                    if (char === button.innerText) {
                        dash[index].innerText = char;
                        winCount += 1
                        if ((winCount + spaceCount) === btnArray.length) {
                            blocker()
                            levelWon();
                        }
                    }
                });
            } else {
                loseCount += 1;
                removeLifeIcon();
                if (loseCount === 3) {
                    gameOver();
                    blocker();
                }
            } button.disabled = true;
        })
        letterContainer.append(button);
    }
}


/**
 * Generates a random question and hangman and prints on the screen.
 */
function generateRandomHangman() { // Generate random Number
    let num1 = Math.floor(Math.random() * gameQuestion.length);

    // Use random number to generate Hangman
    chosenWord = gameQuestion[num1].hangman;
    chosenWord = chosenWord.toUpperCase()
    questionHangman.innerHTML = `<div class="hangman-selection">${chosenWord}</div>`;


    // Initial hangman replaced by <span> and underscore
    let initialHangmanDisplay = chosenWord.replace(/./g, '<span class="hangman-selection">_</span>');
    questionHangman.innerHTML = initialHangmanDisplay;

    // Use random number to append question
    chosenQuestion = gameQuestion[num1].question
    questionQuestion.innerHTML = `<div class="question-selection">${chosenQuestion}</div>`;

    // Use random number to append hint1 and hint2
}

// block letter buttons when win or lose game
function blocker() {
    let letterBtn = document.querySelectorAll(".letters")
    letterBtn.forEach(function (button) {
        button.disabled = true;
    })
}

function hintReveal() {}

/**
 * Creates next level button and add 1 to the level count. If completes 3 levels then initiates gameWon()
 */
function levelWon() {
    let livesRemaining = lifeImage.children.length;
    let pointScore = 10 - (6 - (2 * (livesRemaining))) + (parseInt(totalPoints.innerText));
    totalPoints.innerText = pointScore;

    if (levelCount === 2) {
        gameWon();
    } else {
        alert("You have won!");
        levelCount += 1;
        let levelbtn = document.createElement("button");
        levelbtn.classList.add("next-level-btn");
        levelbtn.setAttribute("onclick", "nextLevelBtn()");
        levelbtn.innerText = "Next Level"
        newGameContainer.append(levelbtn);
    }


}

/**
 * When clicking on next level button, this will reset all the counts, except level count.
 */
function nextLevelBtn() {
    winCount = 0;
    loseCount = 0;
    spaceCount = 0;

    letterContainer.innerHTML = "";

    startGame();
}

/**
 * This function adds a congratulations message and a reset button to restart the game.
 */
function gameWon() {
    let winMessage = document.createElement("p");
    winMessage.classList.add("pmessage");
    if (parseInt(totalPoints.innerText) === 30){
        winMessage.innerHTML = `Well done on completing the Word Links Game. You scored ${parseInt(totalPoints.innerText)}, which is the maximum score. WELL DONE!
        Click on restart game and see if you can match your previous score or try new questions.`;
    } else {
    winMessage.innerHTML = `Well done on completing the Word Links Game. You socred a total of ${
        parseInt(totalPoints.innerText)
    } points. Click on new game and see if you can beat your previous score or try new questions.`;
    }
    letterContainer.append(winMessage);
    restartButton();
}

/**
 * Adds a comiseration mesaage and restarts the game
 */
function gameOver() {
    let loseMessage = document.createElement("p");
    loseMessage.classList.add("pmessage");
    loseMessage.innerHTML = "Unlucky, click on new game and give it another go";
    letterContainer.append(loseMessage);

    restartButton();
}

/**
 * Creates live container and adds three lives.
 */
function createLifeIcons() {
    livesContainer.classList.remove("hide");
    document.getElementById("points-container").classList.remove("hide");
    let imagesToAdd = Math.min(3 - lifeImage.children.length);
    for (let i = 0; i < imagesToAdd; i++) {
        const addImgDiv = document.createElement("div");
        addImgDiv.classList.add("life");
        lifeImage.appendChild(addImgDiv);
    }
}

/**
 * Removes a life counter
 */
function removeLifeIcon() {
    let removeImgDiv = document.getElementsByClassName("life");
    if (removeImgDiv.length > 0) {
        lifeImage.removeChild(removeImgDiv[removeImgDiv.length - 1]);
    }
};

/**
 * Creates a restart button that reloads the page and resetting the game.
 */
function restartButton() {
    let restartbtn = document.createElement("button");
    restartbtn.classList.add("restart-btn");
    restartbtn.setAttribute("onclick", "window.location.reload()");
    restartbtn.innerText = "Restart Game";
    newGameContainer.append(restartbtn);

    if (newGameContainer.children.length > 1) {
        newGameContainer.removeChild(newGameContainer.children[0]);
    }
}
