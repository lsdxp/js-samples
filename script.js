let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => Math.floor(Math.random() * 10);

let compareGuesses = (human, computer, target) => {
    const userG = Math.abs(target - human);
    const computerG = Math.abs(target - computer);
    return userG <= computerG;
}

function updateScore(winner) {
  switch(winner){
    case 'human':
          humanScore+=1;
          break;
    case 'computer':
          computerScore+=1;
          break;
    default:
          break;
  }

}

let advanceRound = () => {currentRoundNumber+=1;}


