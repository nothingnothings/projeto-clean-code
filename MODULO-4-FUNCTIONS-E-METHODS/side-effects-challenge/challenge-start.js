



function connectDatabase() {
  const didConnect = database.connect(); //side effect --> vamos nos conectar a 1 database, EXTERNA...
  if (didConnect) {
    return true;
  } else {
    console.log('Could not connect to database!');
    return false;
  }
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === 'unknown') {
    return findStandardAgent(); ///poderia ser 1 side effect..
  }
  return findAgentByRequestType(ticket.requestType);
}

function isValid(email, password) {
  if (!email.includes('@') || password.length < 7) {
    //não é um side effect necessariamente ruim, mas talvez seja bom fazer um outsourcing...
    console.log('Invalid input!'); //SIDE EFFECT (nosso app não tinha esse output antes, agora tem...)
    return false;
  }
  return true;
}

// function outputMessage(message) {
//   console.log(message);
// }
