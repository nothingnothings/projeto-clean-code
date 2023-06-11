class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

const user = new User('Max', 31, 'max@test.com');

class User2 {
  //versão BEM melhor da versão de cima
  constructor(userData) {
    this.name = userData.name;
    this.age = userData.age;
    this.email = userData.email;
  }
}

const user2 = new User({ name: 'Max', age: 31, email: 'max@test.com' });

// function compare(a, b, comparator) { //versão ruim/confusa:
//     if (comparator === 'equal') {
//         return a === b;
//     } else if (comparator === 'not equal') {
//         return a !== b;
//     } else if (comparator === 'greater') {
//         return a > b;
//     } else if (comparator === 'smaller') {
//         return a < b;
//     }
// }

function compare(comparisonData) {
  //TODO - VERSÃO BOA DO CÓDIGO DE CIMA (passamos apenas 1 parameter, em vez de 3)...

  const { first, second, comparator } = comparisonData;
  if (comparisonData === 'equal') {
    return first === second;
  } else if (comparator === 'not equal') {
    return first !== second;
  } else if (comparator === 'greater') {
    return first > second;
  } else if (comparator === 'smaller') {
    return first < second;
  }
}




const isSmaller = compare({ first: 3, second: 5, comparator: 'smaller' });
const isSmaller2 = compare({ first: 3, second: 5, comparator: 'equal' });
