const screens = document.querySelectorAll('.screen');
const choiceBtns = document.querySelectorAll('.choice-btn');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');

let seconds = 0;
let score = 0;
let selectedIcon = '';

startBtn.addEventListener('click', () => {
  screens[0].classList.add('up');
});

choiceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedIcon = btn.querySelector('i').className;
    screens[1].classList.add('up');
    setTimeout(spawnItem, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(updateTimer, 1000);
}

function updateTimer() {
  seconds++;
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;
  
  timeEl.innerHTML = `Time: ${mins}:${secs}`;
}

function spawnItem() {
  const item = document.createElement('div');
  item.classList.add('target-item');

  const { x, y } = getRandomPos();
  item.style.left = `${x}px`;
  item.style.top = `${y}px`;

  const randomRot = Math.floor(Math.random() * 360);
  item.innerHTML = `<i class="${selectedIcon}" style="transform: rotate(${randomRot}deg)"></i>`;

  item.addEventListener('click', catchItem);
  gameContainer.appendChild(item);
}

function getRandomPos() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const padding = 150;

  const x = Math.random() * (width - padding) + (padding / 2);
  const y = Math.random() * (height - padding) + (padding / 2);

  return { x, y };
}

function catchItem() {
  score++;
  scoreEl.innerHTML = `Caught: ${score}`;

  if (score === 20) {
    messageEl.classList.add('show');
  }

  this.classList.add('caught');
  setTimeout(() => this.remove(), 500);

  setTimeout(spawnItem, 800);
  setTimeout(spawnItem, 1200);
}