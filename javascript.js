const optionBtn = document.querySelectorAll('div.optionBtn button');

let playerScore = 0;
let compScore = 0;

function ComputerPlay() {
    const picks = ["rock", "paper", "scissors"];
    const ind = Math.floor(Math.random() * picks.length);
    return picks[ind]
}

function playRound(e) {
    let compSelection = ComputerPlay();
    let playerSelection = e.target.textContent; 
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
    const player = document.querySelector('.player');
    const comp = document.querySelector('.comp');
    player.textContent = playerScore;
    comp.textContent = compScore;
    return playerScore, compScore;
}

optionBtn.forEach(button => button.addEventListener('click', playRound));




