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

const filterDataType = (data, filterBy, condition) => {
  let newArrayFilter = [];
  switch (filterBy) {
  case 'Tipo':
    newArrayFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition));
    break;
  }
  return newArrayFilter;
};

const computeStats = (data) =>
  data.reduce((acum, element) =>
    (acum.spawn_chance > element.spawn_chance)
      ? acum :
      element);

const filterDataCandy = (data, condition) => {  
  const newArrayFilter = data.filter(compare => (compare.candy_count === condition));
  return newArrayFilter; 
};

window.dataPokemon = {
  sortData,
  filterDataType,
  computeStats,
  filterDataCandy, 
};