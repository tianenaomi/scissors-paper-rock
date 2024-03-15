function getComputerChoice() {
    let ans = Math.floor((Math.random() * 3) + 1);
    if (ans === 1) {
        return ("Scissors");
    } else if (ans === 2) {
        return ("Paper");
    } else {
        return ("Rock");
    }
}

let playerWins = 0;
let computerWins = 0;
let totalWins = 0;
    
function sumWins(){
    totalWins = playerWins + computerWins;
}

function play(playerSelection, computerSelection) {
let message = document.querySelector('.message');
if (playerSelection == "Rock" && computerSelection == "Scissors") {
    message.textContent = "Winner Winner Chicken Dinner! Rock smashes scissors";
    return ++playerWins;
} else if (playerSelection == "Scissors" && computerSelection == "Paper"){
    message.textContent = "Winner Winner Chicken Dinner! Scissors cuts paper";
    return ++playerWins;
} else if (playerSelection == "Paper" && computerSelection == "Rock"){
    message.textContent = "Winner Winner Chicken Dinner! Paper covers rock";
    return ++playerWins;
} else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    message.textContent = "Suck shit loser! Rock smashes your dumb scissors";
    return ++computerWins;
} else if (playerSelection == "Paper" && computerSelection == "Scissors"){
    message.textContent = "Suck shit loser! Scissors cuts paper to shreds idiot";
    return ++computerWins;
} else if (playerSelection == "Rock" && computerSelection == "Paper"){
    message.textContent = "Suck shit loser! Paper suffocates your stupid air-breathing rock";
    return ++computerWins;
} else if (playerSelection == computerSelection){
    message.textContent = "Gross a tie. This round doesn't count. Play again?";
    return;
}
}

function declareWinner(playerWins, computerWins){
    let gameOver = document.createElement('div');
    scoreBoard.appendChild(gameOver);
    if (playerWins > computerWins){
        gameOver.textContent = "GAME OVER! YOU WIN!";
    } else if (playerWins < computerWins){
        gameOver.textContent = "GAME OVER! YOU LOSE!";
    }
    replay();
}

let buttons = document.querySelectorAll('button');
let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let playerClick;
let playerChoice = document.querySelector('.playerChoice');
let compChoice = document.querySelector('.compChoice');
let playerScore = document.getElementById('playerScore');
let compScore = document.getElementById('compScore');

function playRound(){
    let playerSelection = playerClick;
    playerChoice.textContent = playerSelection;
    let computerSelection = getComputerChoice();
    compChoice.textContent = computerSelection;
    play(playerSelection, computerSelection);
    playerScore.textContent = playerWins;
    compScore.textContent = computerWins;
}

buttons.forEach((button) =>{
    button.addEventListener('click', function click(event){
        switch (event.target.id){  
            case "scissors":
                playerClick = "Scissors";
                break;
            case "paper":
                playerClick = "Paper";
                break;
            case "rock":
                playerClick = "Rock";
                break;
            default:
                alert("you didn't make a selection");
                break;
        }
        if (playerWins != 5 || computerWins != 5){
            let total = document.getElementById('total');
            playRound();
            sumWins();
            total.textContent = "Total games: " + totalWins;
            if (playerWins == 5 || computerWins == 5){
                return (declareWinner(playerWins, computerWins));
            }
        }
    });
}); 

function replay(){
    const replay = document.createElement('div');
    const yes = document.createElement('button');
    const no = document.createElement('button');
    replay.textContent = "Want to play again?"
    yes.textContent = "Nah Yeah";
    no.textContent = "Yeah Nah";
    scoreBoard.appendChild(replay);
    scoreBoard.appendChild(yes);
    scoreBoard.appendChild(no);
    yes.addEventListener('click', () => {
        window.location.reload();
    });
    no.addEventListener('click', () => {
            buttons.forEach((button) => {
            button.disabled = true;
            
        });
        replay.remove();
        yes.remove();
        no.remove();
    });
}       