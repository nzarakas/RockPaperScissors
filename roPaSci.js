function getComputerChoice() {
    let a = Math.floor(Math.random()*3) +1;
    return a===1 ? `rock`: a===2? `paper` : `scissors`;
}

function getHumanChoice(){
    let humanChoiceReg = prompt("Rock Paper or Scissors?");
    const regRock = /^rock$/i;
    const regPaper = /^paper$/i;
    const regScissors = /^scissors$/i;

    if (humanChoiceReg.match(regRock)) {
        return `rock`;
    }
    else if (humanChoiceReg.match(regPaper)) {
        return `paper`;
    }
    else if (humanChoiceReg.match(regScissors)) {
        return `scissors`;
    }
    else alert("Please select one of the options rock/paper/scissors");
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){

    
    let choiceCombo = humanChoice + computerChoice ;
    
    switch(choiceCombo){
        
        case `paperrock`:
        case `scissorspaper`:
        case `rockscissors`:
            console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            break;

        case `scissorsrock`:
        case `paperscissors`:
        case `rockpaper`:
            console.log(`Computer wins! ${computerChoice} loses to ${humanChoice}`);
            ComputerScore++;
            break;
        case `scissorsscissors`:
        case `rockrock`:
        case `paperpaper`:
            console.log(`It's a Tie...Both players chose ${ComputerChoice}`);
            break;
        default:
            console.log("Something didn't quite go right..");
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

for(let round = 0; round<5;round++){
    playRound(humanSelection, computerSelection);
    console.log('humanScore:'+humanScore +'computerScore:'+computerScore );
}
    


