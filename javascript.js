
//Möglichkeiten zur Auswahl in Array

const options = ["rock", "paper","scissors"];

//Funktion für die Wahl des Computers

function getComputerChoice () {
   const choice = options[Math.floor(Math.random() * options.length)];
   return choice;
}

//Funktion für die Wahl des Spielers, wenn Input nicht korrekt wird erneut gefragt

// function getPlayerChoice (){
//    let validatedInput = false;
//   while(validatedInput == false) {
//        const choice = prompt("Choose Rock, Paper or Scissors!", "");
//       if(choice == null) {
 //           continue;
 //       }
 //       const choiceInLower = choice.toLowerCase();
  //      if(options.includes(choiceInLower)) {
  //          validatedInput = true;
   //         return choiceInLower;
   //     }
   // }
//}

    
    

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
        return "It's a tie";
    } else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You loose! ${computerSelection} beats ${playerSelection}`;
    }
}

//function game () {
   // let scorePlayer = 0;
    //let scoreComputer = 0;
    //console.log("Welcome!")
    //for (let i = 0; i < 5; i++){
    //    const playerSelection = getPlayerChoice();
    //   const computerSelection = getComputerChoice();
    //   console.log(playRound(playerSelection, computerSelection));
    //   if(checkWinner (playerSelection, computerSelection) == "Player") {
     //       scorePlayer++;
      //  } else if (checkWinner(playerSelection, computerSelection) == "Computer") {
     //       scoreComputer++;
     //   }

   // }
   
    if (scorePlayer > scoreComputer) {
        console.log ("Congratulations, You Won!");
    } else if (scorePlayer < scoreComputer){
        console.log("You Lost:/");
    } else {
        console.log("It's a tie, no one is the Winner!");
    }
    
//}

game()