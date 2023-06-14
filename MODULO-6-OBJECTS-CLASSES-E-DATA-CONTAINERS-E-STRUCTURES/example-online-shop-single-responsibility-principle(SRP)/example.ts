class OnlineShop {
  private orders: any;
  private offeredProducts: any;
  private customers: any;

  public addProduct(title: string, price: number) {} //offeredProducts (property afetada)

  public updateProduct(productId: string, title: string, price: number) {} //offeredProducts (property afetada)

  public removeProduct(productId: string) {} //offeredProducts (property afetada)

  public getAvailableProducts() {} //offeredProducts (property afetada)

  public restockProduct(productId: string, quantity: number) {} //offeredProducts (property afetada)

  public createCustomer(email: string, password: string) {} //customers (property afetada)

  public loginCustomer(email: string, password: string) {} //customers (property afetada)

  public makePurchase(customerId: string, prodcutId: string) {} //customers (property afetada), orders, offeredProducts

  public addOrder(customerId: string, prodcutId: string) {} //customers 

  public refund(orderId) {} //customers, orders

  public updateCustomerProfile(customerId: string, name: string) {} // customers
}
