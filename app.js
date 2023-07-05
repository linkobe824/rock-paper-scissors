function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    const normalizePlayerSelection = playerSelection.toLowerCase();
    //logic for you win
    if(normalizePlayerSelection === "rock" && computerSelection === "scissors"){
        return `You win!, ${normalizePlayerSelection} beats ${computerSelection}`;
    }else if(normalizePlayerSelection === "scissors" && computerSelection === "paper"){
        return `You win!, ${normalizePlayerSelection} beats ${computerSelection}`;
    }else if(normalizePlayerSelection === "paper" && computerSelection === "rock"){
        return `You win!, ${normalizePlayerSelection} beats ${computerSelection}`;
    }
    //logic for you lose
    if(computerSelection === "rock" && normalizePlayerSelection === "scissors"){
        return `You lose!, ${computerSelection} beats ${normalizePlayerSelection}`;
    }else if (computerSelection === "sissors" && normalizePlayerSelection === "paper"){
        return `You lose!, ${computerSelection} beats ${normalizePlayerSelection}`;
    }else if (computerSelection === "paper" && normalizePlayerSelection === "rock"){
        return `You lose!, ${computerSelection} beats ${normalizePlayerSelection}`;
    }

    //return draw
    return "DRAW!!!";
}

const player = "rock";
console.log(playRound(player, getComputerChoice()));