// Question options for the hangman
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
    }, {
        question: "Name this famous golf course",
        hangman: "augusta",
        hint1: "First tournament played in 1934",
        hint2: "Winner takes home a Green Jacket"
    }, {
        question: "Name this golfer",
        hangman: "viktor hovland",
        hint1: "Won the Mayakoba classic in 2020 and 2021",
        hint2: "Born in Norway in 1997"
    }, {
        question: "Name this golf course",
        hangman: "bethpage black",
        hint1: "Course in New York State that is open to the public",
        hint2: "Brooks Koepka won the PGA CHampionship here in 2019"
    }, {
        question: "Name this golf course",
        hangman: "pebble beach",
        hint1: "Course in California",
        hint2: "Home of the AT&T championship"
    }, {
        question: "Golf terminology",
        hangman: "shank",
        hint1: "Another name for a cut of meat",
        hint2: "Golfers worst shot off the heel"
    }, {
        question: "Name this golf course",
        hangman: "old course st andrews",
        hint1: "Stop at the Jigger Inn for a pint",
        hint2: "The Swilken bridge connects the 18th tee to the fairway"
    }, {
        question: "Name this golf course",
        hangman: "tpc sawgrass",
        hint1: "Has a very famous 17th hole",
        hint2: "Home to the Player's Championship"
    }, {
        question: "Name this golfer",
        hangman: "seve ballesteros",
        hint1: "Won 5 major championships during his career",
        hint2: "Spanish golfer, who was world number 1 during his career"
    }, {
        question: "Name this golfer",
        hangman: "tiger woods",
        hint1: "Studied at Stanford University",
        hint2: "Only player to hold all four major championships at the same time"
    }, {
        question: "Golf terminology",
        hangman: "birdie",
        hint1: "shooting one less than the par for a hole",
        hint2: "type of bird"
    }, {
        question: "Name this golf course",
        hangman: "Royal Troon",
        hint1: "Open champioship golf course situated just outside Glasgow",
        hint2: "Henrik Stenson beat Phil Mickleson here for the title in 2016"
    }
];

// General variables
const letterContainer = document.getElementById("letter-container");
const questionHangman = document.getElementById("hangman-container");
const questionQuestion = document.getElementById("question-container");
const newGameContainer = document.getElementById("new-game-container");
const livesContainer = document.getElementById("lives-container");
const lifeImage = document.getElementById("life-images");
const totalPoints = document.getElementById("total-points");

let winCount = 0;
let loseCount = 0;
let spaceCount = 0;
let levelCount = 0;

let chosenWord = "";

document.addEventListener("DOMContentLoaded", pageLoad);

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


        button.addEventListener("click", function () { 
            // Check if button is equal to letter in hangman then display in text.
            if (btnArray.includes(button.innerText)) {
                btnArray.forEach(function checkLetters(char, index) {
                    if (char === button.innerText) {
                        dash[index].innerText = char;
                        winCount += 1;
                        if ((winCount + spaceCount) === btnArray.length) {
                            blocker();
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
        });
        letterContainer.append(button);
    }
}

/**
 * Generates a random question and hangman and prints on the screen.
 */
function generateRandomHangman() { // Generate random Number
    let randomQuestionIndex = Math.floor(Math.random() * gameQuestion.length);

    // Use random number to generate Hangman
    chosenWord = gameQuestion[randomQuestionIndex].hangman;
    chosenWord = chosenWord.toUpperCase();
    questionHangman.innerHTML = `<div class="hangman-selection">${chosenWord}</div>`;


    // Initial hangman replaced by <span> and underscore
    let initialHangmanDisplay = chosenWord.replace(/./g, '<span class="hangman-selection">_</span>');
    questionHangman.innerHTML = initialHangmanDisplay;

    // Use random number to append question
    let chosenQuestion = gameQuestion[randomQuestionIndex].question;
    questionQuestion.innerHTML = `<div class="question-selection">${chosenQuestion}</div>`;
}

// block letter buttons when win or lose game
function blocker() {
    let letterBtn = document.querySelectorAll(".letters");
    letterBtn.forEach(function (button) {
        button.disabled = true;
    });
}

/**
 * Creates next level button and add 1 to the level count. If completes 3 levels then initiates gameWon()
 */
function levelWon() {
    letterContainer.innerHTML = "";
    let livesRemaining = lifeImage.children.length;
    let pointScore = 10 - (6 - (2 * (livesRemaining))) + (parseInt(totalPoints.innerText));
    totalPoints.innerText = pointScore;

    if (levelCount === 2) {
        gameWon();
    } else {
        let levelWinMessage = document.createElement("p");
        levelWinMessage.classList.add("pmessage");
        if (levelCount === 0) {
        levelWinMessage.innerHTML = `Well done on getting through the first level. Click next level to carry on.`;
        letterContainer.append(levelWinMessage);
        } else {
            levelWinMessage.innerHTML = `Well done on getting through the second level. Click next level to take on the final challenge.`;
            letterContainer.append(levelWinMessage); 
        }

        levelCount += 1;

        createNextLevelButton();
    }

}

/**
 * Creates a new level button
 */
function createNextLevelButton(){
    let levelbtn = document.createElement("button");
    levelbtn.classList.add("next-level-btn");
    levelbtn.setAttribute("onclick", "nextLevelBtn()");
    levelbtn.innerText = "Next Level";
    newGameContainer.append(levelbtn);
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

let nextLevel = document.getElementsByClassName("next-level-btn");
nextLevel.addEventListener("click", nextLevelBtn);

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
    letterContainer.innerHTML = "";
    let loseMessage = document.createElement("p");
    loseMessage.classList.add("pmessage");
    loseMessage.innerHTML = "Unlucky, you did not enter the correct letters. Click on restart game and give it another go!";
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
}

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
