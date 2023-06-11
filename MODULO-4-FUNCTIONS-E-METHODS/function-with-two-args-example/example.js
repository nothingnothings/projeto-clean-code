function login(email, password) {
  //Log a user in
  //...
}

login('max@test.com', 'testers');

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(10, 13);

// const log = (message, isError) => { ///código ruim (somos forçados a entrar nesse method para COMPREENDER O QUE DIABOS 'false' faz, aquele value boolean faz... )
//   if (isError) {
//     console.error(message);
//   } else {
//     console.log(message);
//   }
// };

// log('hi there!', false); /// EXEMPLO DE FUNCTION QUE CHAMA 2 PARAMETERS EXTREMAMENTE MAL ESCRITA (pq não sabemos o que diabos 'false'  fará .. nada intuitivo)....

const log = (message) => {
  /// TODO - O MESMO CÓDIGO DE CIMA, MAS CONSERTADO (mais legível, menos obtuso, e mais fácil de ser chamado)...
  console.log(message);
};

const logError = (message) => {
  /// TODO - O MESMO CÓDIGO DE CIMA, MAS CONSERTADO (mais legível, menos obtuso, e mais fácil de ser chamado)...

  console.error(message);
};

log('hi there!'); /// TODO - O MESMO CÓDIGO DE CIMA, MAS CONSERTADO (mais legível, menos obtuso, e mais fácil de ser chamado)...
logError('An error');
