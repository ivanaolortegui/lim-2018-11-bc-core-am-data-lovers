// Function to sort by name and ascending descending id.
const sortData = (data, sortBy, sortOrder) => {
  let newArraySort = [];
  for (let i = 0; i < data.length; i++) {
    newArraySort.push(Object.assign({}, data[i]));	   
  }  

  switch (sortOrder) {
  case 'asc':
    if (sortBy === 'name') {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.name > elementB.name ? 1 : -1));
    } else {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.id > elementB.id ? 1 : -1));
    }
    break;
  case 'desc':
    if (sortBy === 'name') {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.name < elementB.name ? 1 : -1));
    } else {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.id < elementB.id ? 1 : -1));
    }
    break;
  }
  return newArraySort;
};

// Function to filter by type of Pokémon
const filterDataType = (data, filterBy, condition) => {
  let newArrayFilter = [];
  switch (filterBy) {
  case 'Tipo':
    newArrayFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition));
    break;
  }
  return newArrayFilter;
};

// Function to filter by quantity of candies
const filterDataCandy = (data, condition) => {  
  const newArrayFilter = data.filter(compare => (compare.candy_count === condition));
  return newArrayFilter; 
};

// Function to calculate maximun spaw chance of Pokemon
const computeStats = (data) =>
  data.reduce((acum, element) =>
    (acum.spawn_chance > element.spawn_chance)
      ? acum :
      element);

window.dataPokemon = {
  sortData,
  filterDataType,
  computeStats,
  filterDataCandy, 
};