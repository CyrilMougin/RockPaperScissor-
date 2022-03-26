/* allow to count the number of round for the game*/
let MATCHDURATION = 0;

//#region round functions

/**
* choose randomly between 'rock' 'paper' or 'scissor'
* @return {string} choosenResultIndex
*/
function computerPlay() {
    const result = ["rock", "paper","scissor"];
    let choosenResultindex = result[Math.floor(Math.random() * result.length)];
    return choosenResultindex;
}

/**
* choose if player or computer wins the round
* @param {string} playerSelection
* @param {string} playerSelection
*/
function playRound(playerSelection, computerSelection){
    
    let playerScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");
    let roundResult = document.querySelector('#round-result');

    /* loop that decide who win a round */
    if ( playerSelection == computerSelection) 
    {
        roundResult.textContent = "draw" 
    }
    else if (playerSelection == 'rock'    && computerSelection == "scissor"  ||
             playerSelection == 'scissor' && computerSelection == "paper"    ||
             playerSelection == 'paper'   && computerSelection == "rock") {
            
            /* get the html text and add +1 to it's vlue*/
            newScore = parseInt(playerScore.textContent) + 1 ;
            playerScore.textContent = parseFloat(newScore);
            roundResult.textContent = "player win the round !"
        }
    else {
        /* get the html text and add +1 to it's vlue*/
        newScore = parseInt(computerScore.textContent) + 1 ;
        computerScore.textContent = parseFloat(newScore);
        roundResult.textContent = "computer win the round !"
    }

    roundResult.style.opacity = "100%";
    MATCHDURATION +=1 ;
}


/**
* Decide if we went over 5 rounds
* @return {boolean} true
* @return {boolean} false
*/
function isGameOver() {
    
    if (MATCHDURATION == 5) {
        const playerButtons = document.querySelectorAll(".btn");
        playerButtons.forEach(button => {
            button.disabled = true;
            button.classList.add("noHover")
        });
        return true;
    }
    return false;
}


/**
* Set the text that shows who win the game after 5 rounds
*/
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
//#endregion

// #region Click functions 

/**
* player decision on each round click handler
*/
function playerClick(e){
    playRound(e.target.className, computerPlay());
    if(isGameOver()) {
        winnerDecision();
    }
}

/**
* handle the complete reset when pushing the reset button
*/
function resetClick(){

    const playerButtons = document.querySelectorAll(".btn");
    let playerScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");
    let roundResult = document.querySelector('#round-result');

    playerScore.textContent = '0';
    computerScore.textContent = '0';
    roundResult.style.opacity = "0%";
    playerButtons.forEach(button => {
         button.classList.remove("noHover");
         button.disabled = false;
        });

    MATCHDURATION = 0;
}

//#endregion

/* add the listener to the buttons */
const playerButtons = document.querySelectorAll(".btn");
playerButtons.forEach(button => button.addEventListener('click', playerClick));

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener('click', resetClick);    

    







