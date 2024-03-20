const choices = document.querySelectorAll('.choice');
const result = document.querySelector('.result');
const restartButton = document.getElementById('restartButton');
let playerChoice = '';
let computerChoice = '';
let gameEnded = false;

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const checkResult = (player, computer) => {
  if (player === computer) {
    return 'It\'s a tie!';
  } else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
};

const showResult = (resultText) => {
  result.textContent = resultText;
};

const restartGame = () => {
  result.textContent = '';
  gameEnded = false;
};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    if (gameEnded) {
      return;
    }

    playerChoice = choice.getAttribute('data-choice');
    computerChoice = getComputerChoice();

    const resultText = checkResult(playerChoice, computerChoice);
    showResult(resultText);

    gameEnded = true;
  });
});

restartButton.addEventListener('click', restartGame);
