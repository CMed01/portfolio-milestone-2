let gameQuestion = [
    {question: "Name this golfer",
    hangman: "jordanspieth",
    hint1: "Studied at University of Texas",
    hint2: "Won his first major in 2015"},
    {question: "Golf terminology",
    hangman: "albatross",
    hint1: "nickname for a score",
    hint2: "type of bird"}
]

const letterContainer = document.getElementById("letter-container");

// Initial function when page loads
function pageLoad() {
    // Add hangman letter to letter container
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);
        letterContainer.append(button);
        } 
    }

window.onload = pageLoad();

function startGame() {

}

function generateRandomQuestion(){

}

function checkAnswer() {

}

function countdownTimer() {

}

function livesCounter () {

}