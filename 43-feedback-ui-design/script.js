const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Masterpiece';

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  } else if (e.target.classList.contains('rating')) {
    removeActive();
    e.target.classList.add('active');
    selectedRating = e.target.children[1].innerHTML;
  }
});

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
    <i class="fas fa-film"></i>
    <strong>That's a wrap!</strong>
    <br>
    <strong>Rating: ${selectedRating}</strong>
    <p>Your notes have been logged to the director's archive. We will use this feedback in the editing room.</p>
  `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}