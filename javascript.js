
//Möglichkeiten zur Auswahl in Array

const textArray = ["rock", "paper","scissors"];

//Funktion für die Wahl des Computers

function getComputerChoice () {
   return textArray[Math.floor(Math.random() * textArray.length) ];
}

//Eingabe Fenster für die Wahl des Spielers, toLowerCase() macht alles klein

let playerSelection = prompt("Please select rock, paper, or scissors", "").toLowerCase();
const computerSelection = getComputerChoice();

function play (playerSelection, computerSelection) {



    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper!";
    } else if (playerSelection === "paper" && computerSelection ==="rock") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection ==="paper") {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection ==="scissors") {
        return " You Lose! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection ==="rock") {
        return "You Lose! Rock beats Scissors!";
    }
}

console.log(play(playerSelection, computerSelection));

//Rock Scissors -> You Win! Rock beats Scissors!
// Scissors Paper ->You Win! Scissors beats Paper!
//Paper Rock ->You Win! Paper beats Rock!

//Rock Paper -> You Lose! Paper beats Rock!
//Paper Scissors -> You Lose! Scissors beats Paper!
//scissors Rock -> You Lose! Rock beats Scissors!
