'use strict';
// console.log(document.querySelector('.msg').textContent);
// document.querySelector('.msg').textContent = 'Correct Number!';
// document.querySelector('.obt').textContent = 30;
// document.querySelector('.inp').value = 23;
// console.log(document.querySelector('.inp').value);
let k = Math.floor(Math.random() * 100) + 1;
console.log(k);
let score = 100,
  highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.inp').value);
  if (!guess) {
    document.querySelector('.msg').textContent =
      'No number! Please Enter a Number!';
  } else if (k === guess) {
    document.querySelector('.msg').textContent =
      'Correct Number 🎉! You did it!👏';
    highscore = Math.max(score, highscore);
    document.querySelector(
      '.highscore-label'
    ).textContent = `🏆 Highscore: ${highscore}`;
    document.body.style.backgroundImage = 'none';
    document.body.style.background =
      'linear-gradient(to top, rgb(246, 8, 206), rgb(14, 187, 250))';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.querySelector('.inp').style.width = '30rem';
    document.querySelector('.inp').style.height = '5rem';
    document.querySelector('.inp').style.fontSize = '3rem';
    document.querySelector('.inp').style.backgroundColor = '#000';
    document.querySelector('.inp').style.color = '#fff';
  } else if (guess <= k + 10 && guess > k) {
    if (score > 5) {
      document.querySelector('.msg').textContent = 'Close! But Little high!';
      score = score - 5;
      document.querySelector('.score-label').textContent = `💯 Score: ${score}`;
    } else {
      document.querySelector('.msg').textContent = 'You lost the game!';
      document.querySelector('.score-label').textContent = `💯 Score: ${0}`;
    }
  } else if (guess >= k - 10 && guess < k) {
    if (score > 5) {
      document.querySelector('.msg').textContent = 'Close! But Little high!';
      score = score - 5;
      document.querySelector('.score-label').textContent = `💯 Score: ${score}`;
    } else {
      document.querySelector('.msg').textContent = 'You lost the game!';
      document.querySelector('.score-label').textContent = `💯 Score: ${0}`;
    }
  } else if (guess > k) {
    if (score > 10) {
      document.querySelector('.msg').textContent = 'Too High!';
      score = score - 10;
      document.querySelector('.score-label').textContent = `💯 Score: ${score}`;
    } else {
      document.querySelector('.msg').textContent = 'You lost the game!';
      document.querySelector('.score-label').textContent = `💯 Score: ${0}`;
    }
  } else if (guess < k) {
    if (score > 10) {
      document.querySelector('.msg').textContent = 'Too Low!';
      score = score - 10;
      document.querySelector('.score-label').textContent = `💯 Score: ${score}`;
    } else {
      document.querySelector('.msg').textContent = 'You lost the game!';
      document.querySelector('.score-label').textContent = `💯 Score: ${0}`;
    }
  }
  document.querySelector('.aga').addEventListener('click', function () {
    score = 100;
    k = Math.floor(Math.random() * 100) + 1;
    console.log(k);
    document.querySelector('.score-label').textContent = `💯 Score: ${score}`;
    document.querySelector('.msg').textContent =
      'Start guessing...Best of Luck!🤞';
    document.querySelector('.inp').value = '';
    document.body.style.backgroundImage = 'none';
    document.body.style.background =
      'linear-gradient(to top, rgb(19, 246, 246), rgb(22, 250, 22))';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.querySelector('.inp').style.width = '100px';
    document.querySelector('.inp').style.height = '20px';
    document.querySelector('.inp').style.fontSize = '20px';
    document.querySelector('.inp').style.backgroundColor = '#fff';
    document.querySelector('.inp').style.color = '#000';
  });
});
