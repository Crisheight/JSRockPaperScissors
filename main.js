function getComputerChoice(max) {
    computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0 ) {
        return "rock";
    }

    else if (computerChoice === 1) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

console.log(getComputerChoice(3));