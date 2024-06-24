function getComputerChoice(max) {
    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0 ) {
        console.log("The computer calculated rock");
        return computerChoice;
    }

    else if (computerChoice === 1) {
        console.log("The computer calculated paper");
        return computerChoice;
    }

    else {
        console.log("The computer calculated scissors");
        return computerChoice;
    }
} // End getComputerChoice

console.log(getComputerChoice(3));

function getUserChoice() {
    let userChoice = prompt("Enter rock, paper, or scissors: ");
    userChoice = userChoice.toLowerCase();

    if (userChoice === "rock") {
        console.log("You chose rock");
        userChoice = 0;
        return userChoice;
    }

    else if (userChoice === "paper") {
        console.log("You chose paper");
        userChoice = 1;
        return userChoice;
    }

    else if (userChoice === "scissors") {
        console.log("You chose scissors");
        userChoice = 2;
        return userChoice;
    }

    else {
        console.log("Invalid input");
        return "Invalid input";
    }
} // End getUserChoice

console.log(getUserChoice());

function keepScore(user, computer) {
    if (user === computer) {
        console.log("It's a tie!");
    }

    else if (user === 0 && computer === 2) {
        console.log("You win!");
    }

    else if (user === 1 && computer === 0) {
        console.log("You win!");
    }

    else if (user === 2 && computer === 1) {
        console.log("You win!");
    }

    else {
        console.log("You lose!");
    }
} // End keepScore

keepScore(getUserChoice(), getComputerChoice(3));



