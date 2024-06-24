function getComputerChoice(max) {
    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0 ) {
        console.log("rock");
        return computerChoice;
    }

    else if (computerChoice === 1) {
        console.log("paper");
        return computerChoice;
    }

    else {
        console.log("scissors");
        return computerChoice;
    }
} // End getComputerChoice

console.log(getComputerChoice(3));

function getUserChoice() {
    let userChoice = prompt("Enter rock, paper, or scissors: ");
    userChoice = userChoice.toLowerCase();

    if (userChoice === "rock") {
        console.log("rock");
        userChoice = 0;
        return userChoice;
    }

    else if (userChoice === "paper") {
        console.log("paper");
        userChoice = 1;
        return userChoice;
    }

    else if (userChoice === "scissors") {
        console.log("scissors");
        userChoice = 2;
        return userChoice;
    }

    else {
        console.log("Invalid input");
        return "Invalid input";
    }
} // End getUserChoice

console.log(getUserChoice());



