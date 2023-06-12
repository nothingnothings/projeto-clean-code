function addProduct(name, price) { // bad example - function grande, cheia de side effects e OPERAÇÕES... (deve ser splittada, e os side effects, removidos... isso vai deixar os tests com nossa lógica MAIS FÁCEIS DE SEREM escritos)
  if (!name || name.trim() === '' || !price || price < 0) {
    console.log('Invalid input - product was not created.');
    return;
  }
  const product = {
    id: name + '_' + Math.random().toString(),
    name: name,
    price: price,
  };
  database.insert('products', product);
  return product;
}

describe(function () {
  it('should create a product for valid names and prices', function () {
    const createdProduct = addProduct('Carpet', 19);
    expect(createdProduct).not.toBeUndefined();
  });

  it('should generate a product id that contains the product name', function () {
    const createdProduct = addProduct('Book', 19);
    expect(createdProduct.id).stringContaining('Book');
  });
});
