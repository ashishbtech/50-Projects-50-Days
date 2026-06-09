const poke_container = document.getElementById('poke-container');
const pokemon_count = 150;
const colors = {
  fire: '#ff4757',
  grass: '#2ed573',
  electric: '#ffbf00',
  water: '#00d4ff',
  ground: '#eccc68',
  rock: '#a0a0a5',
  fairy: '#ff9ff3',
  poison: '#5f27cd',
  bug: '#10ac84',
  dragon: '#ff6b6b',
  psychic: '#ff9f43',
  flying: '#c8d6e5',
  fighting: '#ee5253',
  normal: '#576574'
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
}

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');

  const poke_types = pokemon.types.map(type => type.type.name);
  const type = main_types.find(type => poke_types.indexOf(type) > -1);
  const color = colors[type];

  pokemonEl.style.borderTop = `3px solid ${color}`;

  const pokemonInnerHTML = `
    <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `;

  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
}

fetchPokemons();