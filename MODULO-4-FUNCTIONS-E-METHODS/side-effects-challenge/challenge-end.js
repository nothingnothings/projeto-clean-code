function initApp() {
  const success = connectDatabase(); //side effect --> vamos nos conectar a 1 database, EXTERNA...
  if (!success) {
    console.log('Could not connect to database!');
  }
}

function connectDatabase() {
  const didConnect = initApp(); //side effect --> vamos nos conectar a 1 database, EXTERNA...
  if (didConnect) {
    return true;
  } else {
    console.log('Could not connect to database!');
    return false;
  }
}
function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent(); ///poderia trazer 1 side effect.. (mas provavelmente não é)
  }
  return findAgentByRequestType(ticket.requestType);
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    //não é um side effect necessariamente ruim, mas talvez seja bom fazer um outsourcing...
    // outputMessage('Invalid input!'); //SIDE EFFECT (nosso app não tinha esse output antes, agora tem...)
    return false;
  }
  return true;
}

function outputMessage(message) {
  console.log(message);
}

function createUser(email, password) {
  if (!isValid(email, password)) {
    outputMessage('Could not connect to database!');
  }
}
