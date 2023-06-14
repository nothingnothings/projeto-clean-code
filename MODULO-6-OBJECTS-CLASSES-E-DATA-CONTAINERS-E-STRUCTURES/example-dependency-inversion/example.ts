// interface Database {
//   storeData(data: any);
// }

// interface RemoteDatabase {
//   connect(uri: string);
// }

// class SQLDatabase2 implements Database, RemoteDatabase {
//   connect(uri: string) {
//     console.log('Connecting to SQL database!');
//   }

//   storeData(data: any) {
//     console.log('Storing data...');
//   }
// }

// class InMemoryDatabase2 implements Database {
//   storeData(data: any) {}
// }

// class App {
//   private database: SQLDatabase2 | InMemoryDatabase2;

//   constructor(database: SQLDatabase2 | InMemoryDatabase2) {
//     if (database instanceof SQLDatabase2) {
//       database.connect('my-url');
//     }

//     this.database = database;
//   }

//   saveSettings() {
//     this.database.storeData('some data');
//   }
// }

interface Database {
  storeData(data: any);
}

interface RemoteDatabase {
  connect(uri: string);
}

class SQLDatabase2 implements Database, RemoteDatabase {
  connect(uri: string) {
    console.log('Connecting to SQL database!');
  }

  storeData(data: any) {
    console.log('Storing data...');
  }
}

class InMemoryDatabase2 implements Database {
  storeData(data: any) {}
}

class App {
  private database: Database;

  // constructor(database: SQLDatabase2 | InMemoryDatabase2) {
  constructor(database: Database) {
    // ! if (database instanceof SQLDatabase2) { // É MELHOR TIRAR ISTO, PARA SEGUIR O dependency inversion principle
    // !  database.connect('my-url');
    // ! }

    this.database = database;
  }

  saveSettings() {
    this.database.storeData('some data');
  }
}

const sqlDatabase = new SQLDatabase2();

sqlDatabase.connect('my-url'); // ou seja, o call de 'connect' nessa database se torna MINHA RESPONSABILIDADE, E NÃO RESPONSABILIDADE DO CONSTRUCTOR/CLASS DE 'App'...

const app = new App(sqlDatabase); //é chamado de 'Dependency inversion principle'
//JUSTAMENTE PQ __ DEIXAMOS __ DE NOS IMPORTAR COM A DATA DENTRO DA CLASS DE 'app'

//NÓS INVERTEMOS A DEPENDENCY --> NÓS NÃO DEPENDEMOS DO TYPE DE DATABASE PARA RODAR
/// CONNECT... E, SIM, FORÇAMOS A PESSOA QUE VAI INSTANCIAR ESSA CLASS

//A PROVIDENCIAR 1 DATABASE QUE SATISFAÇA ESSE CONTRACT DE 'Database'...
