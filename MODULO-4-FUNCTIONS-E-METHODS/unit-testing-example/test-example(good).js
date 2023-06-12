class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = name + '_' + Math.random().toString();
  }
}

function addProduct(name, price) {
  // problem solved - function outsourceada, side effects inesperados REMOVIDOS.
  // 1) validate product
  validateProduct(name, price);
  // 2) create product
  const product = new Product(name, price);
  // 3) save/insert product  (EXPECTED side effect) -- MAS AINDA DEVEMOS _ MOCKAR__ ESSE INSERT, fazer ele não existir durante o testing...
  database.insert('products', product);
  // 4) returns product
  return product;
}

function validateProduct(name, price) {
  //has EXPECTED side effect(error message output - alters user state)
  if (!name || name.trim() === '' || !price || price < 0) {
    console.log('Invalid input - product was not created.');
    return;
  }
}

describe('class Product', () => {
  it('should create a product with a name and a price', () => {
    //ARRANGE
    const productName = 'Carpet';
    const productPrice = 19;

    //ACT
    const product = new Product(productName, productPrice);

    //ASSERT
    expect(product.name).toBe('Carpet');
    expect(product.price).toBe(19);
  });

  it('should create a product with a random id', () => {
    //ARRANGE
    const productName1 = 'Carpet';
    const productPrice1 = 19;
    const productName2 = 'Ball';
    const productPrice2 = 5;

    //ACT
    const product1 = new Product(productName1, productPrice1);
    const product2 = new Product(productName2, productPrice2);

    //ASSERT
    expect(product1.id).not.toBe(product2.id);
  });
});

describe('addProduct', function () {
  it('should create a product for valid names and prices', function () {
    //ARRANGE
    const productName = 'Carpet';
    const productPrice = 19;

    //ACT
    const createdProduct = addProduct(productName, productPrice);

    //ASSERT
    expect(createdProduct).not.toBeUndefined();
  });

  it('should generate a product id that contains the product name', function () {
    //ARRANGE
    const productName = 'Book';
    const productPrice = 20;

    //ACT
    const createdProduct = addProduct(productName, productPrice);

    //ASSERT
    expect(createdProduct.id).stringContaining(productName);
  });
});

describe('validateProduct', () => {
  it('should throw an error for invalid names', () => {
    //ARRANGE
    const productName = '';
    const productPrice = 2;
    //ACT
    const resultFn = () => {
      validateProduct(productName, productPrice);
    };
    //ASSERT
    expect(resultFn).toThrowError();
  });
});
