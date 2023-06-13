// class Delivery {
//     private purchase: Purchase;

//     constructor(purchase: Purchase) {
//         this.purchase = purchase;
//     }

//     deliverProduct() {
//         if (this.purchase.deliveryType === 'express') {
//             Logistics.issueExpressDelivery(this.purchase.product);
//         } else if (this.purchase.deliveryType === 'insured') {
//             Logistics.issueInsuredDelivery(this.purchase.product);
//         } else {
//             Logistics.issueStandardDelivery(this.purchase.product);
//         }
//     }

//     trackProduct() {
//         if (this.purchase.deliveryType === 'express') {
//             Logistics.trackExpressDelivery(this.purchase.product);
//         } else if (this.purchase.deliveryType === 'insured') {
//             Logistics.trackInsuredDelivery(this.purchase.product);
//         } else {
//             Logistics.trackStandardDelivery(this.purchase.product);
//         }
//     }
// }

interface Delivery {
  deliverProduct();
  trackProduct();
}

class DeliveryImplementation extends Delivery {
  protected purchase: Purchase; //protected: só pode ser acessado por classes que herdam de Delivery (não podemos acessar essa property do lado de FORA, em outras palavras)

  constructor(purchase: Purchase) {
    this.purchase = purchase;
  }
}

class ExpressDelivery extends DeliveryImplementation implements Delivery {
  deliverProduct() {
    Logistics.trackExpressDelivery(this.purchase.product);
  }

  trackProduct() {
    Logistics.trackInsuredDelivery(this.purchase.product);
  }
}

class InsuredDelivery extends DeliveryImplementation implements Delivery {
  deliverProduct() {
    Logistics.issueInsuredDelivery(this.purchase.product);
  }

  trackProduct() {
    Logistics.trackInsuredDelivery(this.purchase.product);
  }
}

class StandardDelivery extends DeliveryImplementation implements Delivery {
  deliverProduct() {
    Logistics.issueStandardDelivery(this.purchase.product);
  }

  trackProduct() {
    Logistics.trackStandardDelivery(this.purchase.product);
  }
}

function createDelivery(purchase) {
  let delivery;

  if ((purchase.deliveryType = 'express')) {
    delivery = new ExpressDelivery({});
  } else if (purchase.deliveryType === 'insured') {
    delivery = new InsuredDelivery({});
  } else {
    delivery = new StandardDelivery({});
  }

  return delivery;
}

let delivery: Delivery = createDelivery({});

// if ((this.purchase.deliveryType = 'express')) {
//   delivery = new ExpressDelivery({});
// } else if (this.purchase.deliveryType === 'insured') {
//   delivery = new InsuredDelivery({});
// } else {
//   delivery = new StandardDelivery({});
// }

delivery.deliverProduct({});
// .deliverProduct();
