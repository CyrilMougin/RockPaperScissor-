
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

    return result;
}

function game(){

    let playerScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++) {
        
        let playerSelection = prompt().toLowerCase();
        let computerSelection = computerPlay();
        let tmpScore = playRound(playerSelection, computerSelection);
        console.log(tmpScore);

        if ( tmpScore == 0) {
            playerScore += 1;        
        }

        else if (tmpScore == 1){
            computerScore +=1;
        }
        
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playerScore);
        console.log(computerScore);
    
    } 

    if (playerScore > computerScore )
    {
        console.log(`Player wins ! ${playerScore} vs ${computerScore}`);
    }
    else {
        console.log(`Computer wins ! ${computerScore} vs ${playerScore}`);
    }

}

const playerButtons = document.querySelectorAll(".btn");


playerButtons.forEach(button => {button.addEventListener('click', clickEvent);
});

