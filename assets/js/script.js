// Options for the hangman
let gameQuestion = [
    {
        question: "Name this golfer",
        hangman: "jordanspieth",
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
        hangman: "rorymcilroy",
        hint1: "has been no.1 golfer in the world",
        hint2: "From Northern Ireland"
    }, {
        question: "Name this golfer",
        hangman: "jonrahm",
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
    }
    , {
        question: "Name this golfer",
        hangman: "gregnorman",
        hint1: "won The Open in 1986 and 1993",
        hint2: "also known as the Shark"
    }
]

const letterContainer = document.getElementById("letter-container");
const questionHangman = document.getElementById("hangman-container");
const questionQuestion = document.getElementById("question-container");
const newGameButton = document.getElementsByClassName("new-game-btn");
const lifeImage = document.getElementById("life-images");

let winCount = 0;
let loseCount = 0;

let chosenWord = "";

document.addEventListener("DOMContentLoaded", pageLoad())

/**
 * Loads backgroud function for game on page load
 */
function pageLoad() { 
    winCount = 0;
    loseCount = 0;

    letterContainer.innerHTML = "";
}
   
/**
 * On click of new game button, the hangman will begin.
 */
function startGame() {
    document.addEventListener("click", generateRandomHangman());
    document.addEventListener("click", pageLoad());
    createLifeIcons();

     // Add hangman user input letters to letter container
     for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);

        button.addEventListener("click", function () { 
            // This will return an array of the letters contained in the hanagman
            let btnArray = chosenWord.split("");
            let dash = document.getElementsByClassName("hangman-selection");
            // Check if button is equal to letter in hangman then display in text.
            if (btnArray.includes(button.innerText)) {
                btnArray.forEach(function checkLetters(char, index) {
                    if (char === button.innerText) {
                        dash[index].innerText = char;
                        winCount += 1
                        if (winCount === btnArray.length) {
                            levelWon()
                            blocker();
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
function generateRandomHangman() { 
    
    // Generate random Number
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

// block buttons when win or lose game
function blocker() {
    let letterBtn = document.querySelectorAll(".letters")
    letterBtn.forEach(function(button){
        button.disabled = true;
    })
}

function hintReveal() {
    
}

function levelWon() {


}

function gameWon() {

}

function gameOver() {

}

function checkAnswer() {}

function countdownTimer() {}

function createLifeIcons() {
    let imagesToAdd = Math.min(3 - lifeImage.children.length);
    for (let i = 0; i< imagesToAdd; i++) {
        const addImgDiv = document.createElement("div");
        addImgDiv.classList.add("life");
        lifeImage.appendChild(addImgDiv);
    }
}

function removeLifeIcon() {
    let removeImgDiv = document.getElementsByClassName("life");
    if (removeImgDiv.length > 0) {
        lifeImage.removeChild(removeImgDiv[removeImgDiv.length - 1]);
    }
};

// New game
