const choices = ["rock", "paper", "scissors"];
const winnerMsg = document.getElementById("winnerMsg");
const userImg = document.getElementById("userImg");
const cpuImg = document.getElementById("cpuImg");
const plScore = document.getElementById("playerScore");
const cpScore = document.getElementById("computerScore");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  let result;
  if (playerChoice === computerChoice) {
    result = "Tie game!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "paper" ? "You Lose!" : "You win!";
        break;
      case "paper":
        result = computerChoice === "scissors" ? "You Lose!" : "You win!";
        break;
      case "scissors":
        result = computerChoice === "rock" ? "You Lose!" : "You win!";
    }
  }
  result === "You win!" ? playerScore++ : result === "You Lose!" ? computerScore++ : null;

  winnerMsg.textContent = "Wait...";
  winnerMsg.style.textTransform = "none";
  userImg.src = "images/rock.png";
  cpuImg.src = "images/rock.png";
  userImg.classList.add("animateLeft");
  cpuImg.classList.add("animateRight");
  setTimeout(() => {
    winnerMsg.textContent = result;
    winnerMsg.style.textTransform = "uppercase";
    userImg.src = `images/${playerChoice}.png`;
    cpuImg.src = `images/${computerChoice}.png`;
    userImg.classList.remove("animateLeft");
    cpuImg.classList.remove("animateRight");
    plScore.textContent = playerScore;
    cpScore.textContent = computerScore;
  }, 3500);
}

// playGame();
