function log(message) {// código que faz sentido, de certa forma...
  console.log(message);
}

log('Hi there!');

// class Message { //TODO mt código, código desnecessário (não vale a pena fazer tudo isso só para podermos chamar a function de 'log()' sem passar nenhum arg)
//   constructor(message) {
//     this.message = message;
//   }

//   log() {
//     console.log(this.message);
//   }
// }

// const msg = new Message('Hi!');
// msg.log();

function square(number) {
  return number * number;
}

const result = square(3);

function emailIsValid(email) {
  return email.includes('@');
}

const isValid = emailIsValid('max@test.com');
