
//globale Variablen
let playerSelection;
let computerSelection;

//Möglichkeiten zur Auswahl in Array

const options = ["rock", "paper","scissors"];


//Funktion für die Wahl des Computers

function getComputerChoice () {
   const choice = options[Math.floor(Math.random() * options.length)];
   return choice;
}

// Wahl des Spielers

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');


rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    /*
    let buttonsToRemove1 = document.getElementById("scissorsButton");
    let buttonsToRemove2 = document.getElementById("paperButton");
    buttonsToRemove1.remove();
    buttonsToRemove2.remove();
    */
    let computerSelection = document.createElement('li');
    computerSelection.innerHTML = "Computer Selection: " + getComputerChoice();
    let container = document.getElementById("List");
    container.appendChild(computerSelection);
    
});

console.log(computerSelection);

paperButton.addEventListener('click', () => {
    playerSelection = "paper";
    let buttonsToRemove1 = document.getElementById("scissorsButton");
    let buttonsToRemove2 = document.getElementById("rockButton");
    buttonsToRemove1.remove();
    buttonsToRemove2.remove();
  
});

scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";
});





//Funktion um festzustellen, wer der Gewinner ist

function checkWinner (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors")  ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ){
    return "Player";
    } else {
        return "Computer";
    }   
}

function playRound (playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);

    if(result == "Tie") {
        const p = document.createElement('p');
        p.innerText = 'It\'s a tie!';

    } else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You loose! ${computerSelection} beats ${playerSelection}`;
    }
};