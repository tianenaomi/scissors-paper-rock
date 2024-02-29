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

let playerWins = 0;
let computerWins = 0;
let totalWins = 0;
    
function sumWins(){
    totalWins = playerWins + computerWins;
}

function play(playerSelection, computerSelection) {
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
}

function declareWinner(playerWins, computerWins){
    if (playerWins > computerWins){
        return("GAME OVER! YOU WIN!")
    } else if (playerWins < computerWins){
        return("GAME OVER! YOU LOSE!")
    }
}

let button = document.querySelectorAll('button')

// ADD event listener for click on buttons
// IF click on scissors THEN
//   

button.forEach((button) => {
    button.addEventListener('click', )

});
button.addEventListener()


function playRound(){
    
    let playerSelection = pchoice.toLowerCase();    // this no longer required / needs to be reworked
    console.log("You chose " + playerSelection)
    let computerSelection = getComputerChoice();
    console.log("Computer chose " + computerSelection)
    play(playerSelection, computerSelection);
    console.log("Player: " + playerWins + " Computer: " + computerWins)
}

// INSTRUCT TO REMOVE
// function game(){
//     while (totalWins <= 4){
//         playRound();
//         sumWins();
//         console.log("Total games: " + totalWins);
//         console.log(" ");
//     } return (declareWinner(playerWins, computerWins));
// }

// console.log(game());



