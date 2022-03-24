let MATCHDURATION = 0;

isGameOver();

function computerPlay() {
    const result = ["rock", "paper","scissor"];
    let choosenResultindex = result[Math.floor(Math.random() * result.length)];
    return choosenResultindex;
}


function playRound(playerSelection, computerSelection){
    
    let result;
    if ( playerSelection == computerSelection) 
    {
        result = 2;
    }
    else if (playerSelection == 'rock'    && computerSelection == "scissor"  ||
             playerSelection == 'scissor' && computerSelection == "paper"    ||
             playerSelection == 'paper'   && computerSelection == "rock") {
            
            result = 0;
        }
    else {
        result = 1 ;
    }
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(result);
    return result;
}


function isGameOver() {
    if (MATCHDURATION == 5) {
        const playerButtons = document.querySelectorAll(".btn");
        playerButtons.forEach(button => button.disabled = true);
        playerButtons.forEach(button => button.style.opacity = 0.5);
    }
}



function clickEvent(e){
    playRound(e.target.className, computerPlay());
    

}
const playerButtons = document.querySelectorAll(".btn");


playerButtons.forEach(button => button.addEventListener('click', clickEvent));
    







