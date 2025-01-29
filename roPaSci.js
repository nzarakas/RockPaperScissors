//function that randomly selects rock paper or scissors as the computer choice
function getComputerChoice() {
    let a = Math.floor(Math.random()*3) +1;
    return a===1 ? `rock`: a===2? `paper` : `scissors`;
}

//playerButtons is an Array
const playerButtons = document.querySelectorAll("button") 

//Div creation for score display
const container = document.querySelector("body");

//Div that announces who won the Round
const winsDiv = document.createElement("div");
container.appendChild(winsDiv);

//Div that announces the current score after playing a Round
const scoreDiv = document.createElement("div");
container.appendChild(scoreDiv);

//create div that will trigger as soon as there is a winner to announce with the finalscore
const finalScoreDiv = document.createElement("div");
container.appendChild(finalScoreDiv);


playerButtons.forEach(button =>{ //every button gets its own event handler
    button.addEventListener("click", function(e) {
        
        let testChoice = e.target.id;
        let computerChoice = getComputerChoice();
        playRound(testChoice,computerChoice);
        
        finalScoreDiv.textContent = '';

        if (humanScore === 5 || computerScore === 5){
            
            finalScoreDiv.textContent = 
                humanScore === 3  ? 
                `You win the Game! Finai Score is You:${humanScore} Computer:${computerScore}`:
                `Computer wins the Game... Final Score is You:${humanScore} Computer:${computerScore}`;
            
            resetScores();
        }

    });
});

let humanScore = 0;
let computerScore = 0;

resetScores = () =>{
    humanScore = 0;
    computerScore = 0;
}


function playRound(humanChoice, computerChoice){
       
    let choiceCombo = humanChoice + computerChoice ;
    
    switch(choiceCombo){      
        case `paperrock`:
        case `scissorspaper`:
        case `rockscissors`:
            humanScore++;
            winsDiv.textContent = `Human wins the Round! ${humanChoice} beats ${computerChoice}\r\n`;
            scoreDiv.textContent = `The Score is Human: ${humanScore} Computer: ${computerScore}`;
            break;

        case `scissorsrock`:
        case `paperscissors`:
        case `rockpaper`:
            computerScore++;
            winsDiv.textContent = `Computer wins the Round! ${humanChoice} loses to ${computerChoice}\r\n`;
            scoreDiv.textContent = `The Score is Human: ${humanScore} Computer: ${computerScore}`;
            break;

        case `scissorsscissors`:
        case `rockrock`:
        case `paperpaper`:
            winsDiv.textContent = `It's a Tie...Both players chose ${computerChoice}\r\n`;
            scoreDiv.textContent = `The Score is Human: ${humanScore} Computer: ${computerScore}`;
            break;

        default:
            console.log("Something didn't quite go right..");
    }
}






    


