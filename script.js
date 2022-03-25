let MATCHDURATION = 0;

isGameOver();

function computerPlay() {
    const result = ["rock", "paper","scissor"];
    let choosenResultindex = result[Math.floor(Math.random() * result.length)];
    return choosenResultindex;
}


function playRound(playerSelection, computerSelection){
    
    let playerScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");
    let roundResult = document.querySelector('#round-result');

    if ( playerSelection == computerSelection) 
    {
        result = 2;
        roundResult.textContent = "draw"
         
    }
    else if (playerSelection == 'rock'    && computerSelection == "scissor"  ||
             playerSelection == 'scissor' && computerSelection == "paper"    ||
             playerSelection == 'paper'   && computerSelection == "rock") {
            
            newScore = parseInt(playerScore.textContent) + 1 ;
            playerScore.textContent = parseFloat(newScore);
            roundResult.textContent = "player win the round !"
        }
    else {
        newScore = parseInt(computerScore.textContent) + 1 ;
        computerScore.textContent = parseFloat(newScore);
        roundResult.textContent = "computer win the round !"
    }

    roundResult.style.opacity = "100%";
    MATCHDURATION +=1 ;
}

function isGameOver() {
    
    if (MATCHDURATION == 5) {
        const playerButtons = document.querySelectorAll(".btn");
        playerButtons.forEach(button => button.disabled = true);
        playerButtons.forEach(button => button.classList.add("noHover"));
        return true;
    }
    return false;
}


function winnerDecision() {

    let playerScore = parseInt((document.querySelector("#player-score")).textContent);
    let computerScore = parseInt((document.querySelector("#computer-score")).textContent);
    let roundResult = document.querySelector('#round-result');

    if (playerScore === computerScore){
        console.log("it's a draw !")
        roundResult.textContent = "it's a draw game!"
    }
    else if (playerScore > computerScore) {
        roundResult.textContent = "player wins the game !"
    }
    else {
        roundResult.textContent = "Computer wins the game!"
    }


}

function playerClick(e){
    playRound(e.target.className, computerPlay());
    if(isGameOver()) {
        winnerDecision();
    }
}

function resetClick(){
    const playerButtons = document.querySelectorAll(".btn");
    let playerScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");
    let roundResult = document.querySelector('#round-result');

    playerScore.textContent = '0';
    computerScore.textContent = '0';
    roundResult.style.opacity = "0%";
    playerButtons.forEach(button => button.classList.remove("noHover"));
    playerButtons.forEach(button => button.disabled = false);
    MATCHDURATION = 0;
}


const playerButtons = document.querySelectorAll(".btn");
playerButtons.forEach(button => button.addEventListener('click', playerClick));

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener('click', resetClick);    

    







