const buttons = document.querySelectorAll('.ripple-btn');

buttons.forEach(button => {
  // CRITICAL: Using traditional 'function(e)' so 'this' refers to the button
  button.addEventListener('click', function (e) {
    
    // 1. Get the exact X and Y coordinates of the mouse click on the screen
    const x = e.clientX;
    const y = e.clientY;

    // 2. Get the position of the button relative to the top/left of the screen
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // 3. Calculate the click coordinates inside the button itself
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // 4. Create the span element for the circle
    const circle = document.createElement('span');
    circle.classList.add('circle');
    
    // 5. Place the circle exactly where the click happened
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    // 6. Append it to the button
    this.appendChild(circle);

    // 7. Housekeeping: Remove the span from the DOM after 500ms
    setTimeout(() => circle.remove(), 500);
  });
});