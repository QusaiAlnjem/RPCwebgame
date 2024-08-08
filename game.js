// initial score
let wins = 0;
let losses = 0;
let ties = 0;

const images = {
  "Rock":"images/stone.png",
  "Paper":"images/paper.png",
  "Scissor":"images/scissors.png"};
  
// create a new image element
const imageElem = document.createElement('img');
imageElem.className = "image-pick";

function update_score(){
  const winElem = document.querySelector('.w-count');
  const lossElem = document.querySelector('.l-count');
  const tieElem = document.querySelector('.t-count');

  winElem.innerHTML = wins;
  lossElem.innerHTML = losses;
  tieElem.innerHTML = ties;
}

function play(playerPick){
  // generate a random number
  const choices = ['Paper' , 'Scissor' , 'Rock'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomPick = choices[randomIndex];
  // get the index of the player pick
  const pickIndex = choices.indexOf(playerPick);
  // add the img elelemnt
  imageElem.src = images[randomPick];
  const parentElem = document.querySelector(".computer-pick-section");
  parentElem.appendChild(imageElem);
  // manipulating with the text and width in sentence
  const sentenceSection = document.querySelector(".sentence");
  sentenceSection.style.width = '230px';
  sentenceSection.innerHTML = "Computer Picked:";
  // access the result paragraph
  const result = document.querySelector(".result");

  if (pickIndex > randomIndex){
    if (pickIndex == 2 && randomIndex == 0){ //  Paper <- 0 beats 2 -> Rock
      result.innerHTML = "You Lost.";
      result.style.color = "rgb(195, 30, 30)";
      losses++;
      update_score();
    }
    else{
      result.innerHTML = "You Won!";
      result.style.color = "rgb(58, 164, 31)";
      wins++;
      update_score();
    }
  }
  else if (pickIndex < randomIndex){
    if (pickIndex == 0 && randomIndex == 2){ //  Paper <- 0 beats 2 -> Rock
      result.innerHTML = "You Won!";
      result.style.color = "rgb(58, 164, 31)";
      wins++;
      update_score();
    }
    else{
      result.innerHTML = "You Lost.";
      result.style.color = "rgb(195, 30, 30)";
      losses++;
      update_score();
    }
  }
  else {
    result.innerHTML = "Tie.";
    result.style.color = "rgb(255, 255, 255)";
    ties++;
    update_score();
  }
}


