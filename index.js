const choice = document.querySelector('.player_result');
const gameArea = document.querySelector('.game_area');
const random = document.querySelector('.computer');
const arr = ['✂️', '📜', '🪨'];
const checkArr = ['scissors', 'paper', 'rock'];
let randomChoice = Math.floor(Math.random() * 3);

let clicked;

let chosen = false;
if (!chosen) {
choice.addEventListener('click', function(e) {
    clicked = e.target.closest('.btn');
    choice.innerHTML = `<button style="font-size: 5rem" class="btn rock" type="button">${clicked.innerHTML}</button>`;
    chosen = true;
});
}
let i = 0;
let displayImg = setInterval(function() {
    random.innerHTML = `<button style="font-size: 5rem" class="btn rock" type="button">${arr[i]}</button>`;
    i < 2 ? i++ : i = 0; 
    if (chosen) {
        clearInterval(displayImg);
        const computer = checkArr[randomChoice];
        random.innerHTML = `<button style="font-size: 5rem" class="btn" type="button">${arr[randomChoice]}</button>`;
        const pressed = clicked.classList[1];
        const result = winner(pressed, computer);
        const win = result == 0 ? `<h3>There is no winner</h3>` : `<h3>The winner of the game is : ${result}</h3>`;
        gameArea.insertAdjacentHTML("afterend", win);
    }
}, 100);

const winner = function(choice, comp) {
    if (choice === 'rock') {
      if (comp === 'scissors') {
        return 'You';
      } else if (comp === 'paper') {
        return 'Computer';
      }
    } else if (choice === 'paper') {
      if (comp === 'rock') {
        return 'You';
      } else if (comp === 'scissors') {
        return 'Computer';
      }
    } else if (choice === 'scissors') {
      if (comp === 'paper') {
        return 'You';
      } else if (comp === 'rock') {
        return 'Computer';
      }
    }
    return 0; // It's a tie
  }
