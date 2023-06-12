function generateId(userName) {
  // exemplo de IMPURE FUNCTION - nunca retorna o MESMO VALUE PARA O MESMO PARAMETER QUE FOI PASSADO... (por causa da aleatoriedade de 'Math.random()')
  const id = 'id_' + userName + Math.random().toString();
  return id;
}
