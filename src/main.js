const selectOrder = document.getElementById('select-order');
const containerList = document.getElementById('container-list');
const btnCalculate = document.getElementById('btn-calculateMax');
const selectFilterType = document.getElementById('select-filter-type');
const selectFilterCandy = document.getElementById('select-filter-candy');
const selectCountEgg = document.getElementById('select-filter-Egg');


const listData = (data) => {
  let templateListOfCards = '';
  data.forEach((pokemon) => {
    const card = `
   <div class="card-link">
    <article class="blog-card">
      <img src="${pokemon.img}" />
        <div class="name-details">
        <h3 class="post-name">${pokemon.name}</h3>
        </div>
        <div class="article-details">
        <p class="article-details">Num: ${pokemon.num}</p>
        <p class="article-details">Tipo: ${pokemon.type.join(' & ')} </p>       
        <p class="article-details">Spawn Chance: ${pokemon.spawn_chance} %</p>
        <p class="article-details">Caramelos: ${pokemon.candy_count}</p>           
       </div>
    </article>
   </div>`;
    templateListOfCards += card;
  });
  containerList.innerHTML = templateListOfCards;
};
listData(window.POKEMON.pokemon);

const getOrderValue = () => {
  const pokemonData = window.POKEMON.pokemon;
  const valueOrder = selectOrder.value;
  const valueSelectOrder = (valueOrder.split('-'));
  const selectByOrder = window.dataPokemon.sortData(pokemonData, valueSelectOrder[0], valueSelectOrder[1]);
  listData(selectByOrder);
};
selectOrder.addEventListener('change', getOrderValue);

const typePokemonValue = function() {
  const typeData = window.POKEMON.pokemon;
  const filterCondicion = 'Tipo';
  const typePokemonValue = selectFilterType.value;
  const selectByType = window.dataPokemon.filterData(typeData, filterCondicion, typePokemonValue);
  listData(selectByType);
};
selectFilterType.addEventListener('change', typePokemonValue);

const getCalculateValue = () => {
  const pokemonData = window.POKEMON.pokemon;
  const pokemon = window.dataPokemon.computeStats(pokemonData);
  listData([pokemon]);
};
btnCalculate.addEventListener('click', getCalculateValue); 

const getFilterCandyValue = () => {
  const dataPokemon = window.POKEMON.pokemon;
  const candyPokemon = parseInt(selectFilterCandy.value);  
  const selectByCandy = window.dataPokemon.filterDataCandy(dataPokemon, candyPokemon);
  listData(selectByCandy);
};
selectFilterCandy.addEventListener('change', getFilterCandyValue); 

const getEggValue = () => {
  const dataPokemon = window.POKEMON.pokemon;
  const valueOrder = selectCountEgg.value; 
  containerList.innerHTML = window.dataPokemon.statsEgg(dataPokemon, valueOrder);
};
selectCountEgg.addEventListener('change', getEggValue);

