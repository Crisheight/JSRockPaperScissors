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
}

console.log(getComputerChoice(3));
