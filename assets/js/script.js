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
    }
]

const letterContainer = document.getElementById("letter-container");
const questionHangman = document.getElementById("hangman-container");
const questionQuestion = document.getElementById("question-container");
const newGameButton = document.getElementsByClassName("new-game-btn");

document.addEventListener("DOMContentLoaded", pageLoad())

/**
 * Loads backgroud function for game on page load
 */
function pageLoad() {
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
                    }
                });
            }
        })
        letterContainer.append(button);
    }
}

/**
 * On click of new game button, the hangman will begin.
 */
function startGame() {
    document.addEventListener("click", generateRandomHangman());
    countdownTimer();
    livesCounter();
}

/**
 * Generates a random question and hangman and prints on the screen.
 */
function generateRandomHangman() { // Generat random Number
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

function checkAnswers() {
    
}

function countdownTimer() {}

function livesCounter() {}
