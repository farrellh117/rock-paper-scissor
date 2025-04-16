const choices = ["batu", "gunting", "kertas"];
const playerDisplay = document.getElementById("player-display");
const computerDisplay = document.getElementById("computer-display");
const resultDisplay = document.getElementById("result-display");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function getPlayerChoice() {
    const gunting = document.getElementById("scissor-btn");
    const batu = document.getElementById("rock-btn");
    const kertas = document.getElementById("paper-btn");

    gunting.addEventListener("click", () => playRound("gunting"));
    batu.addEventListener("click", () => playRound("batu"));
    kertas.addEventListener("click", () => playRound("kertas"));
}

function playRound(playerChoice) {
    if (gameOver) return;

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "SERI!";
    } else {
        switch (playerChoice) {
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

    if (result === "KAMU MENANG!") {
        playerScore++;
        resultDisplay.classList.add("greenText");
    } else if (result === "KAMU KALAH!") {
        computerScore++;
        resultDisplay.classList.add("redText");
    }

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    checkWinner();
}

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        gameOver = true;
        const finalResult = (playerScore === 5) ? "KAMU MENANG GAME INI! 🎉" : "KOMPUTER MENANG GAME INI! 😞";
        resultDisplay.textContent = finalResult;
        resultDisplay.classList.remove("greenText", "redText");
        resultDisplay.classList.add(playerScore === 5 ? "greenText" : "redText");
    }
}

getPlayerChoice();
