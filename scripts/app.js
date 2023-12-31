function startGame() {
    const choiceBtn = document.querySelectorAll('.choice')

    choiceBtn.forEach(btn => {
    btn.addEventListener('click', playGame);
});
}

//
function playGame() {
    const isPlayerWinner = playRound(this.value, getComputerChoice());

    displayScore(isPlayerWinner);
    displayWinnerMessage();
    
}


function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    const normalizePlayerSelection = playerSelection.toLowerCase();
    //logic for you win
    if(
        (normalizePlayerSelection === "rock" && computerSelection === "scissors") ||
        (normalizePlayerSelection === "scissors" && computerSelection === "paper") ||
        (normalizePlayerSelection === "paper" && computerSelection === "rock")){
            return true;
        }
  
    //logic for you lose
    if(
        (computerSelection === "rock" && normalizePlayerSelection === "scissors") ||
        (computerSelection === "scissors" && normalizePlayerSelection === "paper") ||
        (computerSelection === "paper" && normalizePlayerSelection === "rock")){
        return false;
    }
}

//roundResult true = player win, false = computer win
function displayScore(roundResult){
    const playerPointsRef = document.querySelector('#player-points');
    const computerPointsRef = document.querySelector('#computer-points');
    let playerPoints = parseInt(playerPointsRef.innerHTML);
    let computerPoints = parseInt(computerPointsRef.innerHTML);

    if(roundResult){
        playerPoints++;
        playerPointsRef.textContent = playerPoints;
    }else if (!roundResult){
        computerPoints++;
        computerPointsRef.textContent = computerPoints;
    }
}


function displayWinnerMessage(){
    const playerPoints = document.querySelector('#player-points');
    const computerPoints = document.querySelector('#computer-points');
    let playerPointsCount = parseInt(playerPoints.innerHTML);
    let computerPointsCount = parseInt(computerPoints.innerHTML);

    const winnerPara =  document.querySelector('.winner');

    if(playerPointsCount === 5){
        winnerPara.textContent = 'Player Wins!!';
        disableButtons();     
    }
    else if(computerPointsCount === 5){
        winnerPara.textContent = 'Computer Wins!!';
        disableButtons();
    }
}


function disableButtons(){
    const choiceBtn = document.querySelectorAll('.choice')
    choiceBtn.forEach(btn => {
        btn.disabled = true;
    })
}

startGame();

//corre el juego para console
// function game(){
//     //pedir numero de rondas > 0
//     while(true) {
//         n = prompt("Numero de rondas");
//         if(n > 0 || n === null) break;
//     }
//     //jugar x rondas
//     const winner = playRounds(n);
//     // mostrar ganador
//     alert(winner);
// }

// ejecuta las rondas n veces
// function playRounds(n){
//     const rondas = parseInt(n);
//     //variables para guardar las victiores de los jugadores
//     let playerWins = 0;
//     let computerWins = 0;
//     // jugar n veces
//     for(let i = 0; i < n; i++){
//         //pedir y validar entrada de usuario
//         const userInput = askAndValidateInput();
//         // jugar y asignar victoria
//         const booleanResult = playRound(userInput, getComputerChoice());
//         if(booleanResult){
//             playerWins++;
//         }
//         else if(!booleanResult){
//             computerWins++;
//         }
//     }

//     const winnerMessage = winner(playerWins, computerWins);
//     return winnerMessage;
// }

// pide entrada al usuario
// function askInput(){
//     const input = prompt("rock, paper or scissors");
//     return input;
// }

// valida que la entrada sea de un valor apropiado
// function checkInput(s){
//     // palabras validas
//     const validChoices = ["rock", "paper", "scissors"]
//     // verificar que s sea una palabra valida
//     const normalizeS = s.toLowerCase();
//     if(validChoices.includes(normalizeS)){
//         return true;
//     }
//     return false;
// }

// pide al usuario la entrada hasta que sea valida;
// function askAndValidateInput(){
//     let choice;
//     while(true){
//         choice = askInput();
//         if(checkInput(choice)){
//             break;
//         }
//     }
//     return choice;
// }

// // retorna al ganador del juego
// function winner(player1, player2){
//     if(player1 > player2){
//         return `You win ${player1}-${player2}`;
//     }else if(player1 < player2){
//         return `You lose ${player2}-${player1}`;
//     }
//     return "Draw";
// }

