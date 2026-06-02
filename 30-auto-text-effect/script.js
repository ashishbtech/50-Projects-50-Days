const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Visual storytelling through light, shadow, and code. — Ashish Kushwaha';
let idx = 1;
let speed = 200 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
  speed = 200 / e.target.value;
});