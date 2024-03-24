var yourscore = 0;
var opponentscore = 0;
var you;
var opponent;
let value = 5;
let Attempt = 7;

var choices = ["rock", "paper", "scissors"];

window.onload = function () {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectchoice);
    document.getElementById("choices").append(choice);
  }
};

function selectchoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";
  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you == opponent) {
    yourscore += 1;
    opponentscore += 1;
  } else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourscore += 1;
      } else {
        opponentscore += 1;
      }
    } else if (you == "scissors") {
      if (opponent == "paper") {
        yourscore += 1;
      } else {
        opponentscore += 1;
      }
    } else if (you == "paper") {
      if (opponent == "rock") {
        yourscore += 1;
      } else {
        opponentscore += 1;
      }
    }
  }

  document.getElementById("your-score").innerText = yourscore;
  document.getElementById("opponent-score").innerText = opponentscore;
  Attempt--;
  document.getElementById("Attempt").textContent = `Attempts: ${Attempt}`;
  if (Attempt === 0)
   {
    if (yourscore >= value) {
      window.alert("your");
    } else {
      window.alert("opponent");
    }
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
