// This array MUST match the IDs of your audio tags in HTML exactly
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  // 1. Create a button element
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  // 2. Add an event listener to play the sound
  btn.addEventListener('click', () => {
    stopSongs(); // Stop any current audio before playing the new one
    document.getElementById(sound).play();
  });

  // 3. Inject the button into the HTML
  document.getElementById('buttons').appendChild(btn);
});

// Function to stop all playing audio
function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause(); // HTML5 audio doesn't have a stop() method, so we pause it...
    song.currentTime = 0; // ...and reset the timer back to zero seconds.
  });
}