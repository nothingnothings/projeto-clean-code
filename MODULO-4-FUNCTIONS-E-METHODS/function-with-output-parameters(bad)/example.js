function createId(user) {
  user.id = 'u1';
}

const user = { name: 'Max' };

createId(user);

console.log(user);

// --> O NOME É 'OUTPUT PARAMETER'

// PQ __ ELA SIMPLESMENTE_

// OUTPUTTA _ __ O RESULTADO___ DO TRABALHO DELA (no caso, o 'generate' do id e definição dele no próprio object user)

// COMO PARTE _ DO PARAMETER QUE ELA __ RECEBEU (pq ela coloca DENTRO DELE a coisa que
// ela manipulou)...

// ISSO QUER DIZER QUE __ ELA _ ''MANIPULA O PARAMETER''',

// EM VEZ DE

// RETORNAR 1 NOVO VALUE...





// VERSÃO MELHOR DO CÓDIGO DE CIMA (pq não temos comportamentos inesperados, e não temos OUTPUT PARAMETERS):

class User {
  constructor(name) {
    this.name = name;
  }

  addId() {
    this.id = 'u1';
  }
}

const customer = new User('Max');

customer.addId();

console.log(customer);
