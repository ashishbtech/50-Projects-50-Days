//using a standard tutorial API key for immediate testing. 
//i will use my api key later 
const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

//get initial highly-rated movies on page load
getMovies(API_URL);

async function getMovies(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    //pass the array of movies to our DOM function
    showMovies(data.results);
  } catch (error) {
    console.error("Error fetching data from TMDB:", error);
    main.innerHTML = `<h2 style="color: #ff4757;">Failed to load database.</h2>`;
  }
}

function showMovies(movies) {
  //clear the main container before injecting new search results
  main.innerHTML = '';

  movies.forEach((movie) => {
    //destructure the data we need from the movie object
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    //Handle missing posters gracefully
    const imageSrc = poster_path 
      ? IMG_PATH + poster_path 
      : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80';

    movieEl.innerHTML = `
      <img src="${imageSrc}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average.toFixed(1)}</span>
      </div>
      <div class="overview">
        <h3>Plot Overview</h3>
        <p>${overview}</p>
      </div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'cyan';
  } else if (vote >= 5) {
    return 'amber';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    //Fetch the search endpoint with the user's query
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    //If they submit an empty search, reload the page
    window.location.reload();
  }
});