let playerWins = 0;
let computerWins = 0;
let totalWins = 0;
let weapons = document.querySelectorAll('.button');
let scissors = document.getElementById('scissors');
let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let playerClick;
let playerChoice = document.querySelector('#playerChoice');
let compChoice = document.querySelector('#compChoice');
let playerScore = document.getElementById('playerScore');
let compScore = document.getElementById('compScore');
let gameOver = document.getElementById('gameOver');
let endGame = document.getElementById('endGame');

weapons.forEach((weapon) =>{
    weapon.addEventListener('click', function click(event){
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
            total.textContent = totalWins;
            if (playerWins == 5 || computerWins == 5){
                return (declareWinner(playerWins, computerWins));
            }
        }
    });
}); 

function playRound(){
    let playerSelection = playerClick;
    playerChoice.textContent = playerSelection;
    let computerSelection = getComputerChoice();
    compChoice.textContent = computerSelection;
    play(playerSelection, computerSelection);
    playerScore.textContent = playerWins;
    compScore.textContent = computerWins;
}

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

function play(playerSelection, computerSelection) {
    let message = document.querySelector('.message');
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        message.textContent = "Woo hoo! Rock smashes scissors";
        return ++playerWins;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        message.textContent = "Woo hoo! Scissors cuts paper";
        return ++playerWins;
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        message.textContent = "Woo hoo! Paper covers rock";
        return ++playerWins;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        message.textContent = "Suck shit! Rock smashes your stupid scissors";
        return ++computerWins;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        message.textContent = "Suck shit! Scissors cuts paper to shreds loser";
        return ++computerWins;
    } else if (playerSelection == "Rock" && computerSelection == "Paper"){
        message.textContent = "Suck shit! Paper suffocates your dumb air-breathing rock";
        return ++computerWins;
    } else if (playerSelection == computerSelection){
        message.textContent = "Ew a tie. This round doesn't count. Play again?";
        return;
    }
}

function sumWins(){
    totalWins = playerWins + computerWins;
}

function declareWinner(playerWins, computerWins){
    if (playerWins > computerWins){
        gameOver.textContent = "GAME OVER! YOU WIN!";
    } else if (playerWins < computerWins){
        gameOver.textContent = "GAME OVER! YOU LOSE!";
    }
    endGame.classList.add('open');
    replay();
}

// function replay(){
//     buttons.forEach((button) => {
//             button.disabled = true;
//     });
//     const replay = document.createElement('div');
//     const yes = document.createElement('button');
//     const no = document.createElement('button');
//     const replayBtns = document.querySelector('#replay');
//     replay.textContent = "Want to play again?";
//     yes.textContent = "Heck yes";
//     no.textContent = "Yeah nah";
//     // replay.setAttribute("style", "font-family: sans-serif; font-size: 30px");
//     gameOver.insertBefore(replay,replayBtns);
//     replayBtns.appendChild(yes);
//     replayBtns.appendChild(no);
//     yes.addEventListener('click', () => {
//         window.location.reload();
//     });
//     no.addEventListener('click', () => {
//         replay.remove();
//         yes.remove();
//         no.remove();    
//     });
// }       

// function replay(){
//     buttons.forEach((button) => {
//             button.disabled = true;
//     });
//     const replay = document.createElement('div');
//     const yes = document.createElement('button');
//     const no = document.createElement('button');
//     const replayBtns = document.querySelector('#replay');
//     replay.textContent = "Want to play again?";
//     yes.textContent = "Heck yes";
//     no.textContent = "Yeah nah";
//     // replay.setAttribute("style", "font-family: sans-serif; font-size: 30px");
//     // gameOver.insertBefore(replay, replayBtns);
//     replayBtns.appendChild(yes);
//     replayBtns.appendChild(no);
//     yes.addEventListener('click', () => {
//         window.location.reload();
//     });
//     no.addEventListener('click', () => {
//         replay.remove();
//         yes.remove();
//         no.remove();    
//     });
    
// }  


// ATTEMPT TO CHANGE TO POP UP


const endPopUp = document.querySelector('endPopUp');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const again = document.getElementById('again');

function replay(){
    weapons.forEach((weapon) => {
            weapon.disabled = true;
    });
    // gameOver.classList.add('open');
    yes.addEventListener('click', () => {
        window.location.reload();
    });
    no.addEventListener('click', () => {
        again.remove();
        yes.disabled = true;
        no.disabled = true;    
    });
    
}  

// ADD start button logic
// ADD pop up for start game 
// ADD pop up for game over
// update buttons nodelist

const startGame = document.getElementById('startGame');
const startPopUp = document.querySelector('.startPopUp');
const startButton = document.querySelector('.start');

//window load logic

window.addEventListener('load', loadGame);

function loadGame() {
    startGame.classList.add('open');
    startButton.addEventListener('click', () => {
        startGame.classList.remove('open');
    });
}
