class DeliveryJob {
  customer: any;
  warehouse: any;

  constructor(customer, warehouse) {
    this.customer = customer;
    this.warehouse = warehouse;
  }

  //   deliverLastPurchase() {
  // BAD: violates the Law of Demeter ('.date' is a property of the lastPurchase object) --> NÓS PODEMOS ACESSAR APENAS O OBJECT DEFINIDO COMO PROPRIEDADE, NA NOSSA CLASS, DIRETAMENTE (não podemos acessar a propriedade DENTRO DO OBJECT, DENTRO DO OBJECT... e sim apenas a 'PROPRIEDADE DENTRO DO OBJECT'...)
  // ''this.customer.lastPurchase' seria fine, mas 'this.customer.lastPurchase.date' não é
  //     const date = this.customer.lastPurchase.date;
  //     this.warehouse.deliverPurchasesByDate(this.customer, date);
  //   }

  //   deliverLastPurchase() {
  // TODO - MAS ESTE APPROACH AINDA É RUIM (pq estaríamos empurrando o problema do acesso à property COM A BARRIGA, LÁ NO OBJECT/CLASS DE 'customer')
  //     const date = this.customer.getLastPurchaseDate(); // OK: we are accessing a property of the customer object, but not a property of a property of the customer object
  //     this.warehouse.deliverPurchasesByDate(this.customer, date);
  //   }

  deliverLastPurchase() {
    // VERSÃO SUPERIOR ÀS 2 DE CIMA... --> vamos passar o trabalho para a function de 'deliverPurchase', que vai aceitar esse object aí ( e não vamos precisar DRILLAR DENTRO DESSE OBJECT para extrair o 'lastPurchase.date')...
    this.warehouse.deliverPurchase(this.customer.lastPurchase);
  }
}

class Customer {
  lastPurchase: any;

  getLastPurchaseDate() {
    return this.lastPurchase.date;
  }
}

// --> PQ 'date'

// NÃO É

// DIRETAMENTE

// PARTE

// DE 'customer',

// E SIM

// É __ PARTE __dE OUTRA DATA QUE FAZ PARTE DESSA PROPRIEDADE (a propriedade 'lastPurchase')..

// -> EM OUTRAS PALAVRAS,

// FICARÍAMOS _ COM ACESSO INDIRETO

// A

// ESSA PROPRIEDADE, ALGO QUE NÃO É PERMITIDO PELA LEI DE DEMETER...
