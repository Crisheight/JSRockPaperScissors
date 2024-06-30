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

function keepScore(computerChoice, userChoice) {
    let bothScores = [0,0];
    console.log("User choice: " + userChoice);
    console.log("Computer choice: " + computerChoice)

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    }

    else if (userChoice === 0 && computerChoice === 2) {
        console.log("You win!");
        bothScores[0] = bothScores[0] + 1;
    }

    else if (userChoice === 1 && computerChoice === 0) {
        console.log("You win!");
        bothScores[0] = bothScores[0] + 1;
    }

    else if (userChoice === 2 && computerChoice === 1) {
        console.log("You win!");
        bothScores[0] = bothScores[0] + 1;
    }

    else {
        console.log("Computer wins!");
        bothScores[1] = bothScores[1] + 1;
    }

    console.log("User score: " + bothScores[0]);
    console.log("Computer score: " + bothScores[1]);
    return bothScores;
} // End keepScore

function runGame(n) {
    let i = 0;
    let scoreTracker = [0,0];
    while (i < n) {
        let computerChoice = getComputerChoice(3);
        let userChoice = getUserChoice();
        scoreTracker = scoreTracker + keepScore(computerChoice, userChoice);
        i++;
    }
    console.log("Final score: " + scoreTracker);
} // End runGame

runGame(5);




