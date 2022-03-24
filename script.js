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

    if ( playerSelection == computerSelection) 
    {
        result = 2;
        console.log("draw");
    }
    else if (playerSelection == 'rock'    && computerSelection == "scissor"  ||
             playerSelection == 'scissor' && computerSelection == "paper"    ||
             playerSelection == 'paper'   && computerSelection == "rock") {
            
            newScore = parseInt(playerScore.textContent) + 1 ;
            playerScore.textContent = parseFloat(newScore);
        }
    else {
        newScore = parseInt(computerScore.textContent) + 1 ;
        computerScore.textContent = parseFloat(newScore);
    }

    MATCHDURATION +=1 ;
}



function isGameOver() {
    
    if (MATCHDURATION == 5) {
        const playerButtons = document.querySelectorAll(".btn");
        playerButtons.forEach(button => button.disabled = true);
        playerButtons.forEach(button => button.style.opacity = 0.5);
        return true;
    }
    return false;

}



function clickEvent(e){

    playRound(e.target.className, computerPlay());
    if(isGameOver()) {
        console.log("match is over");
    }
}

const playerButtons = document.querySelectorAll(".btn");
playerButtons.forEach(button => button.addEventListener('click', clickEvent));
    







