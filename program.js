const scissor = document.getElementById("gunting");
const rock = document.getElementById("batu");
const paper = document.getElementById("kertas");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

let playerScoreValue = 0;
let computerScoreValue = 0;
let roundCount = 0;

// Membaut pilihan acak untuk komputer
function getComputerChoice() {
    const choices = ["Gunting", "Batu", "Kertas"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// DOM player weapon
scissor.addEventListener("click", () => playRound("Gunting"));
rock.addEventListener("click", () => playRound("Batu"));
paper.addEventListener("click", () => playRound("Kertas"));

function playRound(playerChoice) {
    if (roundCount >= 5) return;
    
    const computerChoice = getComputerChoice();

    // Menampilkan pilihan weapon yang dipilih player dan computer
    document.getElementById("player-choice").innerText = playerChoice;
    document.getElementById("computer-choice").innerText = computerChoice;

    // Menambah skor tiap ronde untuk player atau komputer
    const result = determineWinner(playerChoice, computerChoice);

    if (result === "Player menang!") {
        playerScoreValue++;
    } else if (result === "Computer menang!") {
        computerScoreValue++;
    }

    // Menampilkan skor tiap ronde
    playerScore.innerText = playerScoreValue;
    computerScore.innerText = computerScoreValue;

    roundCount++;

    // Menampilkan pemenang
    if (roundCount === 5) {
        const winner = document.querySelector(".display-winner");

        if (playerScoreValue > computerScoreValue) {
            winner.innerText = "Game selesai! Player Menang🎉";
        } else if (computerScoreValue > playerScoreValue) {
            winner.innerText = "Game selesai! Computer Menang🎉";
        } else {
            winner.innerText = "Game seri!";
        }
    }
}

function determineWinner(player, computer) {
    if (player === computer) return "Seri!";

    if (
        (player === "Gunting" && computer === "Kertas") || 
        (player === "Batu" && computer === "Gunting") || 
        (player === "Kertas" && computer === "Batu")
    ) {
        return "Player menang!";
    } else {
        return "Computer menang!";
    }
}
