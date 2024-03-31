
const choices = ["rock", "paper", "scissors"];

document.getElementById("play").addEventListener("click", function() {
    const playerChoice = document.querySelector(".choice.active").id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    document.getElementById("computer-choice").innerText = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    const result = getResult(playerChoice, computerChoice);
    document.getElementById("result").innerText = result;
});

document.querySelectorAll(".choice").forEach(choice => {
    choice.addEventListener("click", function() {
        document.querySelectorAll(".choice").forEach(choice => {
            choice.classList.remove("active");
        });
        this.classList.add("active");
    });
});

function getResult(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}
