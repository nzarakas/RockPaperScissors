function getComputerChoice() {
    let a = Math.floor(Math.random()*3) +1;
    return a===1 ? `rock`: a===2? `paper` : `scissors`;
}

function getHumanChoice(choice){
    let humanChoiceReg = prompt("Rock Paper or Scissors?");
    regRock = /^rock$/i;
    regPaper = /^paper$/i;
    regScissors = /^scissors$/i;

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
let ComputerScore = 0;

// function playRound(humanChoice, computerChoice) {
//     if (getHumanChoice === `rock` && getComputerChoice === `scissors`) {
//         console.log(`Human wins! ${getHumanChoice} beats ${getComputerChoice}`);
//         humanScore++;
//     }
//     else if (getHumanChoice === `rock` && getComputerChoice === `paper`){
//         console.log(`Computer wins! ${getComputerChoice} beats ${getHumanChoice}`);
//         ComputerScore++;
//     }
    

// }

function playRound(humanChoice, computerChoice){
    let choiceCombo = humanChoice + computerChoice ;
    
    switch(choiceCombo){
        
        case `paperrock`:
        case `scissorspaper`:
        case `rockscissors`:
            console.log(`Human wins! ${getHumanChoice} beats ${getComputerChoice}`);
            humanScore++;
            break;

        case `scissorsrock`:
        case `paperscissors`:
        case `rockpaper`:
            console.log(`Computer wins! ${getComputerChoice} beats ${getHumanChoice}`);
            ComputerScore++;
            break;
        default:
            console.log(`It's a Tie...Both players chose ${getComputerChoice()}`)
    }

}


