
// Function called getComputerChoice  that will randomly return rock, paper or scissors

const textArray = ['Rock', 'Paper','Scissors'];

function getComputerChoice () {
   return textArray[Math.floor(Math.random() * textArray.length) ];
}

let playersSelection =prompt("Please select rock, paper, or scissors", "")

// Function that plays a single round, two parameters, playersSelection and ComputersSelection
//variable for playersSelection
//variable for ComputersSelection
//different Cases that can happen either lead to Win or Lose
//make it case insensitive 