function getComputerChoice(max) {
    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0 ) {
        console.log("\nThe computer calculated rock");
        return computerChoice;
    }

    else if (computerChoice === 1) {
        console.log("\nThe computer calculated paper");
        return computerChoice;
    }

    else {
        console.log("\nThe computer calculated scissors");
        return computerChoice;
    }
} // End getComputerChoice

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

function keepScore(computerChoice, userChoice, bothScores) {
    console.log("User choice: " + userChoice);
    console.log("Computer choice: " + computerChoice)

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    }

    else if (userChoice === 0 && computerChoice === 2) {
        console.log("You win!");
        bothScores[0]++;
    }

    else if (userChoice === 1 && computerChoice === 0) {
        console.log("You win!");
        bothScores[0]++;
    }

    else if (userChoice === 2 && computerChoice === 1) {
        console.log("You win!");
        bothScores[0]++;
    }

    else {
        console.log("Computer wins!");
        bothScores[1]++;
    }

    console.log("User score: " + bothScores[0]);
    console.log("Computer score: " + bothScores[1]);
    return bothScores;
} // End keepScore

function runGame(n) {
    let i = 0;
    let bothScores = [0,0];
    while (i < n) {
        let computerChoice = getComputerChoice(3);
        let userChoice = getUserChoice();
        bothScores = keepScore(computerChoice, userChoice, bothScores);
        i++;
    }

    if (bothScores[0] > bothScores[1]) {
        console.log("\nYou win the game!");
    }

    else if (bothScores[0] < bothScores[1]) {
            console.log("\nThe computer wins the game!");
    }

    else {
            console.log("\nThe game is a tie!");
    }
} // End runGame

runGame(5);


