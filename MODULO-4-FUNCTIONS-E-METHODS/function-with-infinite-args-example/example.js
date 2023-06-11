function sumUp(...numbers) { //por meio de '...args', nossa function usa, INTERNAMENTE, um ARRAY para esse argumento...
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}

const total = sumUp(10, 19, -3, 22, 5, 100);


//  VERSÃO ALTERNATIVA DA SOLUÇÃO:
// const total2 = sumUp([10, 19, -3, 22, 5, 100]); // 1 único argument (array), em vez de 6 arguments...
