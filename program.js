const choices = ["batu", "gunting", "kertas"];
const playerDisplay = document.getElementById("player-display");
const computerDisplay = document.getElementById("computer-display");
const resultDisplay = document.getElementById("result-display");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
    const gunting = document.getElementById("scissor-btn");
    const batu = document.getElementById("rock-btn");
    const kertas = document.getElementById("paper-btn");

    gunting.addEventListener("click", function() {
        playRound("gunting");
    });

    batu.addEventListener("click", function() {
        playRound("batu");
    });

    kertas.addEventListener("click", function() {
        playRound("kertas");
    });
}

function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice) {
        result = "SERI!";
    } else {
        switch(playerChoice) {
            case "batu":
                result = (computerChoice === "gunting") ? "KAMU MENANG!" : "KAMU KALAH!";
                break;
            case "kertas":
                result = (computerChoice === "batu") ? "KAMU MENANG!" : "KAMU KALAH!";
                break;
            case "gunting":
                result = (computerChoice === "kertas") ? "KAMU MENANG!" : "KAMU KALAH!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`; 
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result) {
        case "KAMU MENANG!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "KAMU KALAH!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

getPlayerChoice();