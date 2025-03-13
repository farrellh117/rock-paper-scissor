/*
INIT userChoice

PRINT pesan "Pilih gunting, kertas, atau batu?"
READ pilihan yang dipilih user
COMPUTE pilihan bot

IF user memilih gunting dan bot memilih kertas THEN
    PRINT pesan "User menggunakan gunting dan bot menggunakan kertas, user menang!"
ELSE IF user memilih gunting dan bot memilih batu THEN
    PRINT pesan "User menggunakan gunting dan bot menggunakan batu, bot menang!"
ELSE IF user memilih kertas dan bot memilih gunting THEN
    PRINT pesan "User menggunakan kertas dan bot menggunakan gunting, bot menang!"
ELSE IF user memilih kertas dan bot memilih batu THEN
    PRINT pesan "User menggunakan kertas dan bot menggunakan batu, user menang!"
ELSE IF user memilih batu dan bot memilih gunting THEN
    PRINT pesan "User menggunakan batu dan bot menggunakan gunting, user menang!"
ELSE IF user memilih batu dan bot memilih kertas THEN
    PRINT pesan "User menggunakan batu dan bot menggunakan kertas, bot menang!"
*/

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
    let userInput = prompt("Pilih gunting, batu, atau kertas?");
    return userInput.toLowerCase();
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
    for(let i = 1; i <= 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    console.log("Skor kamu: " + humanScore);
    console.log("Skor bot: " + computerScore);
}

let humanScore = 0;
let computerScore = 0;

playGame();