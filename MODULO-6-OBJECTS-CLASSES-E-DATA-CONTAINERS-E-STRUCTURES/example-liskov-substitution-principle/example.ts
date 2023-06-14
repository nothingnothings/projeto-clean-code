// class Bird {
//   fly() {
//     console.log('Flying...');
//   }
// }

// class Eagle extends Bird {
//   dive() {
//     console.log('Diving...');
//   }
// }

// const bird = new Bird();
// bird.fly();

// ! -------------------------------

// class Bird {
//   fly() {
//     console.log('Flying...');
//   }
// }

// class Eagle extends Bird {
//   dive() {
//     console.log('Diving...');
//   }
// }

// class Penguin extends Bird {
//   //Problem: Penguins can't fly -- liskov principle doesnt work
// }

// const eagle = new Eagle();
// eagle.fly();



class Bird {
  //does nothing
}

class FlyingBird {
  fly() {}
}

class Eagle extends FlyingBird {
  dive() {
    console.log('Diving...');
  }
}

class Penguin extends Bird {
  //Problem: Penguins can't fly -- liskov principle doesnt work
}

const eagle = new Eagle(); // isso está certo.... e não  temos pq substituir 'eagle' por 'penguin', pq são coisas diferentes... penguins não voam, e eagles voam...
eagle.fly();

//   E O PRINCIPLE NOS DIZ QUE

// __ DEVERÍAMOS TER O MESMO BEHAVIOR DE ANTES...

// É CLARO QUE EM 1 PROGRAMA DE VERDADE

// A

// CLASS
// DE

// 'EAGLE'

// PODE

// FAZER MAIS COISAS DO QUE

// APENAS 'FLY'...

// A MORAL DESSE PRINCPLE É QUE

// AMBOS OS BIRDS DEVERÃO SER CAPAZES DE 'fly'... -> FLY DEVE FAZER AS

// 2 MESMAS COISAS,

// EM AMBAS CLASSES (A BASE CLASS E A SUBCLASS)...

// -> E É ISSO QUE O PRINCIPLE LISKOV QUER:

// ELE QUER QUE VC NÃO ACABE MODELANDO SUA DATA

// DE MANEIRA ERRADA...

// EX: AQUI PEGAMOS 'Bird'
// COMO 1 BASE CLASS PARA TODOS NOSSO SPECIALIZED BIRDS... MAS, PARA O PENGUIN,

// ESSA FOI A ESCOLHA ERRADA...
