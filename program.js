function getComputerChoice() {
    let randomizeChoice = Math.random();

    if(randomizeChoice < 0.33) {
        return "gunting";
    } else if(randomizeChoice < 0.66) {
        return "batu";
    } else {
        return "kertas";
    }
}

function getHumanChoice() {
    const gunting = document.querySelector("#scissor-btn");
    const batu = document.querySelector("#rock-btn");
    const kertas = document.querySelector("#paper-btn");
    
    gunting.addEventListener("click", () => playRound("gunting", getComputerChoice()));
    batu.addEventListener("click", () => playRound("batu", getComputerChoice()));
    kertas.addEventListener("click", () => playRound("kertas", getComputerChoice()));
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "gunting") {
        if(computerChoice === "gunting") {
            return "Seri";
        } else if (computerChoice === "batu") {
            ++computerScore;
            return "Bot memang!";
        } else {
            ++humanScore;
            return "Kamu menang!";
        }
    } else if (humanChoice === "batu") {
        if(computerChoice === "batu") {
            return "Seri";
        } else if (computerChoice === "kertas") {
            ++computerScore;
            return "Bot memang!";
        } else {
            ++humanScore;
            return "Kamu menang!";
        }
    } else if (humanChoice === "kertas") {
        if(computerChoice === "kertas") {
            return "Seri";
        } else if (computerChoice === "gunting") {
            ++computerScore;
            return "Bot memang!";
        } else {
            ++humanScore;
            return "Kamu menang!";
        }
    } else {
        return "Sepertinya pilihan tersebut tidak ada. Tolong pilih gunting, batu, atau kertas!";
    }
}

function playGame() {
    // for(let i = 1; i <= 5; i++) {
        // console.log(playRound(getHumanChoice(), getComputerChoice()));
    // }

    console.log("Skor kamu: " + humanScore);
    console.log("Skor bot: " + computerScore);
}

let humanScore = 0;
let computerScore = 0;

playGame();