console.log("Rock, Paper, Scissor says...SHOOT!");

const gameOptions = ["ROCK", "PAPER", "SCISSOR"];
let score = [0, 0];

while (score[0] < 3 && score[1] < 3) {
    let computerChoice = getComputerChoice();
    let playerSelection = getPlayerSelection();

    if (playerSelection != null || playerSelection != undefined) {
        rock_paper_scissor(computerChoice, playerSelection);
    } else {
        break;
    }

    if (score[0] > score[1]) {
        console.log(`The Score is ${score[0]} to ${score[1]}, You!`);
    } else if (score[0] < score[1]) {
        console.log(`The Score is ${score[0]} to ${score[1]}, Computer...`);
    } else {
        console.log(`The Score is ${score[0]} to ${score[1]}, Tied.`);
    }
}

if (score[0] === 3) {
    console.log("You have won best of 5!");
} else if (score[1] === 3) {
    console.log("You lost to the computer 3 times...");
}

// FUNCTIONS 

function getComputerChoice() {
    let computerRandomChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
    console.log(computerRandomChoice);
    return computerRandomChoice;
}

function getPlayerSelection() {
    let selection = prompt("Rock, Paper, Scissor, says...");
    if (selection === null || selection === undefined) {
        console.log("bye");
    } else {
        while (selection.toUpperCase() != "ROCK" && selection.toUpperCase() != "PAPER" && selection.toUpperCase() != "SCISSOR") {
            selection = prompt("That is not an option!! Please choose 'Rock', 'Paper', or 'Scissor' or GET OUTTA HERE");
            if (selection === null || selection === undefined) {
                console.log("bye");
                selection = "hehe";
                break;
            }
        }
        return selection.toUpperCase();
    }
}

function rock_paper_scissor(computer, player) {
    while (computer === player) {
        console.log("You tied. Again?");
        computer = getComputerChoice();
        player = getPlayerSelection();
    }
    if (computer === "ROCK") {
        switch (player) {
            case "PAPER":
                console.log("You win! Paper encapsulates rock.");
                score[0] += 1;
                break;
            case "SCISSOR":
                console.log("You lose...scissors can't cut rock.");
                score[1] += 1;
                break;
        }
    } else if (computer === "PAPER") {
        switch (player) {
            case "SCISSOR":
                console.log("You win! Scissor cuts paper.");
                score[0] += 1;
                break;
            case "ROCK":
                console.log("You lose...rocks get captured by paper.");
                score[1] += 1;
                break;
        }      
    } else {
        switch (player) {
            case "ROCK":
                console.log("You win! Rock dulls the scissor.");
                score[0] += 1;
                break;
            case "PAPER":
                console.log("You lose...scissor cuts right throw your paper.");
                score[1] += 1;
                break;
        }  
    }
}
