const pchoice = prompt("Scissors, paper, rock?");

const playerSelection = pchoice.toLowerCase();
console.log("You chose " + playerSelection)

function getComputerChoice() {
    let ans = Math.floor((Math.random() * 3) + 1);
    if (ans === 1) {
        return ("scissors");
    } else if (ans === 2) {
        return ("paper");
    } else {
        return ("rock");
    }
}

const computerSelection = getComputerChoice();
console.log("Computer chose " + computerSelection)

function playRound(playerSelection, computerSelection) {
if (playerSelection == "rock" && computerSelection == "scissors") {
    return "Winner Winner Chicken Dinner! Rock smashes scissors";
} else if (playerSelection == "scissors" && computerSelection == "paper"){
    return "Winner Winner Chicken Dinner! Scissors cuts paper";
} else if (playerSelection == "paper" && computerSelection == "rock"){
    return "Winner Winner Chicken Dinner! Paper covers rock";
} else if (playerSelection == "scissors", computerSelection = "rock") {
    return "Suck shit loser! Rock smashes your dumb scissors";
} else if (playerSelection = "paper", computerSelection ="scissors"){
    return "Suck shit loser! Scissors cuts paper to shreds idiot";
} else if (playerSelection = "rock", computerSelection = "paper"){
    return "Suck shit loser! Paper suffocates your stupid air-breathing rock";
} else if (playerSelection = "scissors", computerSelection =          "scissors") {
    return "Gross, a tie. This round doesn't count. Play again?";
} else if (playerSelection = "paper", computerSelection ="paper"){
    return "Tie?! No one likes that. Let's play again";
} else if (playerSelection = "rock", computerSelection = "rock"){
    return "Ew Computer hates ties. This one doesn't count. Again?";
}
}

console.log(playRound(playerSelection, computerSelection));
   
//   const playerSelection = "rock";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));
  


// -------------------------------------------------------------------

// PROBLEM
// User selects 1 of 3 options
// Computer selects 1 0f 3 options
// User and Computer selections revealed simultaneously
// Winner is declared  
    // OR tie
    // if tie, run again


// PLAN
// Interface = false. User will type selection in DevTools Console
// Desired output = reveal computer selection + user selection + message


// PSEUDOCODE
// INPUT string by user via console
// "INPUT" random string by computer
// DECLARE variable for user selection
// DECLARE variable for computer selection
// DECLARE variable for outcome
// COUNT user vs computer round results
// RETURN round count after each game (ie. 1 user, 2 computer)
// IF user > computer
    // RETURN user round winner message and count
        // THEN run sequence again
// ELSE user < computer
    // RETURN user round loser message and count
        // THEN run sequence again
// ELSE user = computer
        // RETURN tie message 
        // THEN run sequence again
        // DISCARD tie result (do not count)
// IF sum of results < 5
    // THEN run sequence again
// ENDIF user win count = 3
        // RETURN user game winner message
    // OR computer win count = 3
        // RETURN user game loser message
    // OR total round count === 5
        // RETURN user game winner/loser message based on final round result
