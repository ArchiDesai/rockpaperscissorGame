let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw . Play Again.";
    msg.style.backgroundColor = "rgb(1, 1, 80)";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE . ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generate computer choice
    const compChoice = genComChoice();
    console.log("comp choice = ", compChoice);
    
    if (userChoice === compChoice) {
        // Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});

const resetBtn = document.querySelector(".btn");
const resetGame = () => {
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    msg.innerText = "Play Again .";
    msg.style.backgroundColor = "rgb(18, 1, 71)";
}
resetBtn.addEventListener("click", resetGame);