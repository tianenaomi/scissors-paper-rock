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

let playerWins = 0;
let computerWins = 0;
let totalWins = 0;

function countPlayer(){
    playerWins++;
}
function countComputer(){
    computerWins++;
}
function sumWins(){
    totalWins = playerWins + computerWins;
}

function playRound(playerSelection, computerSelection) {
if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("Winner Winner Chicken Dinner! Rock smashes scissors");
    return ++playerWins;
} else if (playerSelection == "scissors" && computerSelection == "paper"){
    console.log("Winner Winner Chicken Dinner! Scissors cuts paper");
    return ++playerWins;
} else if (playerSelection == "paper" && computerSelection == "rock"){
    console.log("Winner Winner Chicken Dinner! Paper covers rock");
    return ++playerWins;
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("Suck shit loser! Rock smashes your dumb scissors");
    return ++computerWins;
} else if (playerSelection == "paper" && computerSelection == "scissors"){
    console.log("Suck shit loser! Scissors cuts paper to shreds idiot");
    return ++computerWins;
} else if (playerSelection == "rock" && computerSelection == "paper"){
    console.log("Suck shit loser! Paper suffocates your stupid air-breathing rock");
    return ++computerWins;
} else if (playerSelection == computerSelection){
    console.log("Gross a tie. This round doesn't count. Play again?");
    return;
}
// } else if (playerSelection == "scissors" && computerSelection == "scissors") {
//     return "Gross, a tie. This round doesn't count. Play again?";
// } else if (playerSelection == "paper" && computerSelection == "paper"){
//     return "Tie?! No one likes that. Let's play again";
// } else if (playerSelection == "rock" && computerSelection == "rock"){
//     return "Ew Computer hates ties. This one doesn't count. Again?";
// }
}

// function game(){
//     const pchoice = prompt("Scissors, paper, rock?");
//     const playerSelection = pchoice.toLowerCase();
//     console.log("You chose " + playerSelection)
//     getComputerChoice();
//     console.log("Computer chose " + computerSelection)
//     playRound(playerSelection, computerSelection);

// }

console.log(playRound(playerSelection, computerSelection));

// NEXT CHALLENGE HERE ---

/*

Game function must have
- play round
- display round winner
- display score
- store new score

- play round
- display round winner
- retrieve previous round score and ++1 to round winner score
- store new score for next round

- repeat until player || comp wins ==3
    || until total games played == 5



*/



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
