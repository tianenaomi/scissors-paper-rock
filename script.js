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

let buttons = document.querySelectorAll('button');
let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');
let rock = document.getElementById('rock');

let playerSelection = 0;

function playRound(){
    clickButton();
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


/*  ----  3 problems to solve ----

    1. event handlers are not waiting for click event in playRound function
    2. event handler firing once for each button on 'button' eventListener - SEMI RESOLVED
    3. error message "eventLister is not a function"


    --- how to solve ---

    1. reduce the problem (write code for scisors button only)
    2. possibly due to external JS file. May need to use 'DOMContentLoaded' event listener.
*/

// THIS WORKS - with scissors only
    // function test(e){
    //         console.log('clicked'); 
    //     }

// THIS DOESN'T DO ANYTHING - on either button
    // function test(e){
    //     if (scissors.clicked == true){
    //         console.log('scissors clicked'); 
    //     } else if (paper.clicked == true)
    //         console.log('paper clicked'); 
    //     }

// THIS ALWAYS REGISTERS NON-SCISSOR CLICK   - regardless if scissors clicked
    // function test(e){
    //     if (scissors.onclick == true){
    //         console.log('scissors clicked'); 
    //     } else 
    //         console.log('not scissors'); 
    //     }

// LOL get fucked
    // function test(e){
    //     switch(e){
    //         case scissors:
    //             console.log('scissors');
    //             break;
    //         case paper:
    //             console.log('paper');
    //             break;
    //         default:
    //             console.log('this didn\'t work');
    //     }
    //     }

// ATTEMPT NO. 23,085,970,234,875 WORKS!!!   
function clickButton(){
    document.addEventListener('click', function(event){
        switch (event.target.id){
            case "scissors":
                playerSelection = "scissors";
                console.log("You chose " + playerSelection);
                break;
            case "paper":
                playerSelection = "paper";
                console.log("You chose " + playerSelection);
                break;
            case "rock":
                playerSelection = "rock";
                console.log("You chose " + playerSelection);
                break;
            default:
                console.log("it's still fucked");
                break;
        }
    })
}

console.log(playRound());

