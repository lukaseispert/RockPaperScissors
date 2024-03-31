
//globale Variablen
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

//Möglichkeiten zur Auswahl in Array
const options = ["Rock", "Paper", "Scissors"];

//Funktion für die Wahl des Computers
function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const restartButton = document.querySelector('#restart');
const playerScoreOutput = document.getElementById("playerScore");
const computerScoreOutput = document.getElementById("computerScore");
const rightBox = document.getElementById("rightBox");
const computerSelectionOutput = document.getElementsByClassName('computerSelectionOutput');



// Klick Events der Buttons
rockButton.addEventListener('click', () => {
    playerSelection = "Rock";
    playRound(playerSelection, computerSelection);
});

paperButton.addEventListener('click', () => {
    playerSelection = "Paper";
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    playerSelection = "Scissors";
    playRound(playerSelection, computerSelection);
});

// Klick des Restart Buttons 

restartButton.addEventListener('click', () => {
    // Overlay und Fenster wieder entfernen
    document.getElementById("popup").style.display = "none";
    document.getElementById('overlay').style.display = 'none';
    // Reset des Rundenzählers ud der Punkte
    roundCounter = 0;
    playerScore = 0;
    computerScore = 0;
    // <--Entfernen der Computer Auswahl Elemente-->
   for (let i = 0; i < computerSelectionOutput.length; i++) {

        computerSelectionOutput[i].parentNode.removeChild(computerSelectionOutput[i]);
   }
    

});

// Darstellung der Computerauswahl
function getAndDisplayComputerSelection() {
    const output = document.createElement('button');
    computerSelection = getComputerChoice();
    output.innerHTML = computerSelection;
    output.classList.add('computerSelectionOutput');
    
    rightBox.appendChild(output);
}

//Funktion um festzustellen, wer der Gewinner ist
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
        return "Player";
    } else {
        return "Computer";
    }
}

// Eine Runde wir auf Click gespielt
function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);


    if (roundCounter < 3) {
        getAndDisplayComputerSelection();
        roundCounter += 1;
        if (result == "Tie") {
        } else if (result == "Player") {
            playerScore += 1;
            playerScoreOutput.innerHTML = "You "+ playerScore;
        } else {
            computerScore += 1;
            computerScoreOutput.innerHTML = "Computer " + computerScore;
        }
    } 
    console.log(roundCounter);
    if (roundCounter == 3) {
        displayEndResult();
        roundCounter = 0;
    }
}





function displayEndResult() {

    let outcome = document.getElementById("outcome");

    if (playerScore == computerScore) {
        outcome.innerText = "It's a tie!"
    } else if (playerScore > computerScore) {
        outcome.innerText = "You Won!"
    } else {
        outcome.innerText = "You Lost!"
    }
  
    document.getElementById("popup").style.display = "block";
    document.getElementById('overlay').style.display = 'block';

}