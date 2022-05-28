const optionBtn = document.querySelectorAll('div.optionBtn button');

optionBtn.forEach(button => { button.addEventListener('click', (event) => {console.log(event.target.value);}) });

let playerScore = 0;
let compScore = 0;

function ComputerPlay() {
    const picks = ["rock", "paper", "scissors"];
    const ind = Math.floor(Math.random() * picks.length);
    return picks[ind]
}

function playRound(playerSelection) {
    let compSelection = ComputerPlay(); 
    if ((playerSelection.toLowerCase() == "rock" && compSelection == "scissors") ||
        (playerSelection.toLowerCase() == "paper" && compSelection == "rock") ||
        (playerSelection.toLowerCase() == "scissors" && compSelection == "paper")) {

            playerScore +=1
        }

    else if (playerSelection.toLowerCase() == compSelection){
        
            playerScore +=0
            compScore +=0
    }

    else {

            compScore +=1
    }
    return playerScore, compScore;
}


function getPlayerChoice(e) {
    let playerSelection= (e.target.id);
    playerChoice = e.target.textContent;
    playRound(playerChoice);
  }

// console.log(e.target.id)

