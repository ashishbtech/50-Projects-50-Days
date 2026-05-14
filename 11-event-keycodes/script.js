const insert = document.getElementById('insert');

// Listen for any keydown event on the entire window
window.addEventListener('keydown', (e) => {
  // Overwrite the inner HTML of the insert div with the new key data
  insert.innerHTML = `
    <div class="key">
      <small>event.key</small>
      <span>${e.key === ' ' ? 'Space' : e.key}</span>
    </div>

    <div class="key">
      <small>event.keyCode</small>
      <span>${e.keyCode}</span>
    </div>

    <div class="key">
      <small>event.code</small>
      <span>${e.code}</span>
    </div>
  `;
});