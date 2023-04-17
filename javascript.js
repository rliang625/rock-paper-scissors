function getComputerChoice() {
    choice = (Math.random()*10)
    return ((choice <= (10/3)) ? ("Rock") : ((choice <= 20/3) ? ("Scissors") : ("Paper")))
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return ("It's a Tie!")
    } else if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            console.log("You lose! Paper beats Rock")
            return ("You lose! Paper beats Rock")
        } else {
            console.log("You win! Rock beats Scissors")
            return ("You win! Rock beats Scissors")
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissors") {
            console.log ("You lose! Scissors beats Paper")
            return ("You lose! Scissors beats Paper")
        } else {
            console.log("You win! Paper beats Rock")
            return ("You win! Paper beats Rock")
        }
    }else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats Scissors")
            return ("You lose! Rock beats Scissors")
        } else {
            console.log("You win! Scissors beats Rock")
            return ("You win! Scissors beats Rock")
        }
    }
}


function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?")
        let computerSelection = getComputerChoice()
        if (playRound(playerSelection, computerSelection).match("You win!")) {
            playerScore += 1
            console.log("Player Wins the Round!")
        }
        else if (playRound(playerSelection, computerSelection).match("You lose!")) {
            computerScore += 1
            console.log("Computer Wins the Round!")
        }
    }
    if (playerScore > computerScore) {
        console.log("Player wins the Match!")
    } else if (computerScore > playerScore) {
        console.log("Computer wins the Match")
    }
    else {
        console.log("It's a Tie!")
    }
}

game()