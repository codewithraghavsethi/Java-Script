let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const opetion = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return opetion[randIdx];
};

const drawGame = () => {
  console.log("Game was Draw.");
  msg.innerText = "Game was Draw. Play Again";
  msg.style.backgroundColor = "#000050";
};

const playGame = (userChoice) => {
  console.log("User choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scessors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWiner(userWin);
  }
};

const showWiner = (userWin) => {
  if (userWin) {
    console.log("you win");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "Congratulation! You Win.";
    // msg.innerText = `Congratulation! You Win ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    
} else {
    console.log("you loss");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "Oops Sorry! You Loss.";
    // msg.innerText = `Oops Sorry! You Loss ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

