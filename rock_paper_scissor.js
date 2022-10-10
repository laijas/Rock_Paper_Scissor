console.log("Rock, Paper, Scissor says...SHOOT!");

const header = document.createElement("h2");
header.textContent = "Welcome to Clickitys game of Rock, Paper, Scissor! :)";
document.body.appendChild(header);

const buttonPlayGame = document.createElement("button");
buttonPlayGame.textContent = "Push to Play";
document.body.appendChild(buttonPlayGame);

buttonPlayGame.addEventListener("click", play);

const gameOptions = ["Rock", "Paper", "Scissor"];

const textScore = document.createElement("div");
textScore.id = "textScore";
document.body.appendChild(textScore);

const textWinner = document.createElement("div");
document.body.appendChild(textWinner);
textWinner.id = "textWinner";

function play() {
    let score = [0, 0];
    buttonPlayGame.style.display = "none";
    textScore.style.display = "none";
    textScore.textContent = "";
    textWinner.style.display = "none";
    textWinner.textContent = "";

    const textChoice = document.createElement("div");
    textChoice.textContent = "Make Your Choice: ";
    document.body.appendChild(textChoice);
    textChoice.id = "textChoice";

    const containerButtons = document.createElement("div");
    containerButtons.id = "container";
        
    document.body.appendChild(containerButtons);

    let playerButtons = [];;
 
    for (i=0; i<gameOptions.length; i++) {
        playerButtons[i] = document.createElement("button");
        playerButtons[i].textContent = gameOptions[i];
        containerButtons.appendChild(playerButtons[i]);
    }

    //Player makes choice
    containerButtons.addEventListener("click", storeChoice);
    
    function storeChoice(e) {
        e.target.style.color = "black";
        e.target.style.fontWeight = "bold";
        const choice = e.target.textContent;
        textScore.style.display = "block";
        textWinner.style.display = "block";

        for (j=0; j<gameOptions.length; j++) {
            if (gameOptions[j] != choice) {
                playerButtons[j].style.color = "gray";
                playerButtons[j].style.fontWeight = "lighter";
            }
        }

        const computerChoice = getComputerChoice();
        rock_paper_scissor(computerChoice.toUpperCase(), choice.toUpperCase());
    }

    function getComputerChoice() {
        return gameOptions[Math.floor(Math.random()*gameOptions.length)];
    }

    function rock_paper_scissor(computer, player) {
        console.log("Computer: " + computer, "\nPlayer: " + player);
       
        if (computer === player) {
            console.log("You tied. Again?");
            computer = getComputerChoice();
            textScore.textContent = ("You tied. Again?");
        } else if (computer === "ROCK") {
            switch (player) {
                case "PAPER":
                    //console.log("You win! Paper encapsulates rock.");
                    score[0] += 1;
                    textScore.textContent = `You win! Paper encapsulates rock. The Score is now: ${score[0]} to ${score[1]}`;
                    break;
                case "SCISSOR":
                    //console.log("You lose...scissors can't cut rock.");
                    score[1] += 1;
                    textScore.textContent = `You lose...scissors can't cut rock. The Score is now: ${score[0]} to ${score[1]}`;
                    break;
            }
        } else if (computer === "PAPER") {
            switch (player) {
                case "SCISSOR":
                    //console.log("You win! Scissor cuts paper.");
                    score[0] += 1;
                    textScore.textContent = `You win! Scissor cuts paper. The Score is now: ${score[0]} to ${score[1]}`;
                    break;
                case "ROCK":
                    //console.log("You lose...rocks get captured by paper.");
                    score[1] += 1;
                    textScore.textContent = `You lose...rocks get captured by paper. The Score is now: ${score[0]} to ${score[1]}`;
                    break;
            }      
        } else {
            switch (player) {
                case "ROCK":
                    //console.log("You win! Rock dulls the scissor.");
                    score[0] += 1;
                    textScore.textContent = `You Win! rock dulls the scissor. The Score is now: ${score[0]} to ${score[1]}`;
                    break;
                case "PAPER":
                    //console.log("You lose...scissor cuts right throw your paper.");
                    score[1] += 1;
                    textScore.textContent = `You lose...scissor cuts right through your paper. The Score is now: ${score[0]} to ${score[1]}`;
                    break;
            }  
        }
        console.log("The score is: " + score[0] + " to " + score[1]);
        if (score[0] === 3 || score[1] ===3) {
            containerButtons.removeEventListener("click", storeChoice);
            buttonPlayGame.style.display = "block";
            textChoice.style.display = "none";
            containerButtons.style.display = "none";
            if (score[0] === 3) {
             textWinner.textContent = "You have won best of 5!"   
            } //console.log("You have won best of 5!");
            if (score[1] === 3) {
                textWinner.textContent = "You lost to the computer 3 times...";     
            } //console.log("You lost to the computer 3 times...");
        }
    }

}



// const gameOptions = ["ROCK", "PAPER", "SCISSOR"];
// let score = [0, 0];

// while (score[0] < 3 && score[1] < 3) {
//     let computerChoice = getComputerChoice();
//     let playerSelection = getPlayerSelection();

//     if (playerSelection != null || playerSelection != undefined) {
//         rock_paper_scissor(computerChoice, playerSelection);
//     } else {
//         break;
//     }

//     if (score[0] > score[1]) {
//         console.log(`The Score is ${score[0]} to ${score[1]}, You!`);
//     } else if (score[0] < score[1]) {
//         console.log(`The Score is ${score[0]} to ${score[1]}, Computer...`);
//     } else {
//         console.log(`The Score is ${score[0]} to ${score[1]}, Tied.`);
//     }
// }

// if (score[0] === 3) {
//     console.log("You have won best of 5!");
// } else if (score[1] === 3) {
//     console.log("You lost to the computer 3 times...");
// }

// // FUNCTIONS 

// function getComputerChoice() {
//     let computerRandomChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
//     console.log(computerRandomChoice);
//     return computerRandomChoice;
// }

// function getPlayerSelection() {
//     let selection = prompt("Rock, Paper, Scissor, says...");
//     if (selection === null || selection === undefined) {
//         console.log("bye");
//     } else {
//         while (selection.toUpperCase() != "ROCK" && selection.toUpperCase() != "PAPER" && selection.toUpperCase() != "SCISSOR") {
//             selection = prompt("That is not an option!! Please choose 'Rock', 'Paper', or 'Scissor' or GET OUTTA HERE");
//             if (selection === null || selection === undefined) {
//                 console.log("bye");
//                 selection = "hehe";
//                 break;
//             }
//         }
//         return selection.toUpperCase();
//     }
// }

// function rock_paper_scissor(computer, player) {
//     while (computer === player) {
//         console.log("You tied. Again?");
//         computer = getComputerChoice();
//         player = getPlayerSelection();
//     }
//     if (computer === "ROCK") {
//         switch (player) {
//             case "PAPER":
//                 console.log("You win! Paper encapsulates rock.");
//                 score[0] += 1;
//                 break;
//             case "SCISSOR":
//                 console.log("You lose...scissors can't cut rock.");
//                 score[1] += 1;
//                 break;
//         }
//     } else if (computer === "PAPER") {
//         switch (player) {
//             case "SCISSOR":
//                 console.log("You win! Scissor cuts paper.");
//                 score[0] += 1;
//                 break;
//             case "ROCK":
//                 console.log("You lose...rocks get captured by paper.");
//                 score[1] += 1;
//                 break;
//         }      
//     } else {
//         switch (player) {
//             case "ROCK":
//                 console.log("You win! Rock dulls the scissor.");
//                 score[0] += 1;
//                 break;
//             case "PAPER":
//                 console.log("You lose...scissor cuts right throw your paper.");
//                 score[1] += 1;
//                 break;
//         }  
//     }
// }
