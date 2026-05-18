const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  //start the counter at zero
  counter.innerText = '0';

  const updateCounter = () => {
    //the + sign converts the string from getAttribute into an integer (a math number)
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    //divide the target by 200 to figure out how much to add per frame
    //lowering the divisor (e.g., 100) makes it animate faster
    const increment = target / 200;

    //if the current number is less than the target, keep adding
    if (c < target) {
      //Math.ceil rounds the number up so we don't get decimals on the screen
      counter.innerText = `${Math.ceil(c + increment)}`;
      
      //call this function again after 1 millisecond
      setTimeout(updateCounter, 1);
    } else {
      //once it hits the goal, ensure it shows the exact target number
      counter.innerText = target;
    }
  };

  updateCounter();
});