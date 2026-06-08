const container = document.getElementById('container');
const colors = ['#ffbf00', '#00d4ff', '#ff4757', '#2ed573', '#eccc68'];
const SQUARES = 400;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = 'rgba(255, 255, 255, 0.03)';
  element.style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.5)';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}