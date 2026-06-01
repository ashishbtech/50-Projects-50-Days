const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  const currentTime = Date.now();

  if (clickTime === 0) {
    clickTime = currentTime;
  } else {
    if (currentTime - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = currentTime;
    }
  }
});

function createHeart(e) {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerHTML = `
    <svg viewBox="0 0 24 24" fill="#ffbf00" width="30" height="30">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
      2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
      C13.09 3.81 14.76 3 16.5 3
      19.58 3 22 5.42 22 8.5
      c0 3.78-3.4 6.86-8.55 11.54
      L12 21.35z"/>
    </svg>
  `;

  // Accurate positioning for any screen size/fullscreen mode
  const rect = loveMe.getBoundingClientRect();

  const xInside = e.clientX - rect.left;
  const yInside = e.clientY - rect.top;

  heart.style.left = `${xInside}px`;
  heart.style.top = `${yInside}px`;

  loveMe.appendChild(heart);

  timesClicked++;
  times.textContent = timesClicked;

  setTimeout(() => {
    heart.remove();
  }, 1000);
}