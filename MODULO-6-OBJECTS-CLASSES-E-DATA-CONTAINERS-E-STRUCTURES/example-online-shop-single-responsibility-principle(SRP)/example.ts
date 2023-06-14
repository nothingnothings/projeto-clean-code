class OnlineShop {
  private orders: any;
  private offeredProducts: any;
  private customers: any;

  public addProduct(title: string, price: number) {}

  public updateProduct(productId: string, title: string, price: number) {}

  public removeProduct(productId: string) {}

  public getAvailableProducts() {}

  public restockProduct(productId: string, quantity: number) {}

  public createCustomer(email: string, password: string) {}

  public loginCustomer(email: string, password: string) {}

  public makePurchase(customerId: string, prodcutId: string) {}

  public addOrder(customerId: string, prodcutId: string) {}

  public refund(orderId) {}

  public updateCustomerProfile(customerId: string, name: string) {}
}
