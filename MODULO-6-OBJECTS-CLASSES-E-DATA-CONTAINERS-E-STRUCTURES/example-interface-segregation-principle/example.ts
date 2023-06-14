//  o interface segregation principle nos diz que DEVEMOS TER VÁRIAS INTERFACES, EM VEZ DE 'APENAS 1 INTERFACE GRANDE'....
// interface Database {
//   connect(uri: string);
//   storeData(data: any);
// }

// class SQLDatabase implements Database {
//   connect(uri: string) {}

//   storeData(data: any) {}
// }

// class InMemoryDatabase implements Database { //'Database' interface é muito grande... e não precisamos de todos os métodos... então, vamos criar uma interface mais específica... (pq o principle of 'interface segregation' é isso, é criar mais interfaces, mais específicas, do que ter apenas 1 GERAL, GENÉRICA)
// //   connect(uri: string) {} /// method DESNECESSÁRIO NESSA CLASS... mas ainda está reforçado na interface/contrato -_> surge 1 problema...

//   storeData(data: any) {}
// }

interface Database {
  storeData(data: any);
}

interface RemoteDatabase { // interface mais específica (dividimos a 'interface genérica' em 1 interface base e outra mais específica)...
  connect(uri: string);
}

class SQLDatabase implements Database, RemoteDatabase {
  connect(uri: string) {}

  storeData(data: any) {}
}

class InMemoryDatabase implements Database {
  //'Database' interface é muito grande... e não precisamos de todos os métodos... então, vamos criar uma interface mais específica... (pq o principle of 'interface segregation' é isso, é criar mais interfaces, mais específicas, do que ter apenas 1 GERAL, GENÉRICA)
  //   connect(uri: string) {} /// method DESNECESSÁRIO NESSA CLASS... mas ainda está reforçado na interface/contrato -_> surge 1 problema...

  storeData(data: any) {}
}
