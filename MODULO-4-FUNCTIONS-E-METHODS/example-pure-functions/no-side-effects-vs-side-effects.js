// function createUser(email, password) { //without side effects
//   const user = new User(email, password);
//
//   return user;
// }

let lastAssignedId; //afetado porr 'generateId'...

function createUser(email, password) {
  //with side effects (changes some variable OUTSIDE OF THIS FUNCTION, that changes the overall STATE OF THE APP)...
  const user = new User(email, password);
  startSession(user);
  return user;
}

//functions com side effects --> código do whatsapp web...

function generateId(userName) {
  const id = 'id_' + userName;
  lastAssignedId = id; //exemplo de SIDE EFFECT __ INESPERADO (e ruim) -- isso pq _ ACABAMOS AFETANDO 1 COISA __ eXTERNA A ESSA FUNCTION...
  return id;
}

generateId('arthur');
