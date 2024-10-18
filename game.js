// Initial score
let wins = 0;
let losses = 0;
let ties = 0;

const images = {
  "Rock": "images/stone.png",
  "Paper": "images/paper.png",
  "Scissor": "images/scissors.png"
};

// Create a new image element
const imageElem = document.createElement('img');
imageElem.className = "image-pick";

function updateScore() {
  document.querySelector('.w-count').textContent = wins;
  document.querySelector('.l-count').textContent = losses;
  document.querySelector('.t-count').textContent = ties;
}

function play(playerPick) {
  const choices = ['Rock', 'Paper', 'Scissor'];
  const computerPick = choices[Math.floor(Math.random() * choices.length)];

  // Update computer's pick image and text
  imageElem.src = images[computerPick];
  const parentElem = document.querySelector(".computer-pick-section");
  parentElem.innerHTML = ''; // Clear previous content
  parentElem.appendChild(imageElem);

  const sentenceElem = document.createElement('p');
  sentenceElem.className = 'sentence';
  sentenceElem.textContent = `Computer Picked: ${computerPick}`;
  parentElem.appendChild(sentenceElem);

  // Determine the winner
  const result = getResult(playerPick, computerPick);
  updateScoreAndDisplay(result);
}

function getResult(playerPick, computerPick) {
  if (playerPick === computerPick) return 'tie';
  if (
    (playerPick === 'Rock' && computerPick === 'Scissor') ||
    (playerPick === 'Paper' && computerPick === 'Rock') ||
    (playerPick === 'Scissor' && computerPick === 'Paper')
  ) {
    return 'win';
  }
  return 'lose';
}

function updateScoreAndDisplay(result) {
  const resultElem = document.querySelector(".result");
  
  switch (result) {
    case 'win':
      wins++;
      resultElem.textContent = "You Won!";
      resultElem.style.color = "rgb(58, 164, 31)";
      break;
    case 'lose':
      losses++;
      resultElem.textContent = "You Lost.";
      resultElem.style.color = "rgb(195, 30, 30)";
      break;
    case 'tie':
      ties++;
      resultElem.textContent = "It's a Tie.";
      resultElem.style.color = "rgb(255, 255, 255)";
      break;
  }

  updateScore();
}

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize the game
updateScore();
