function createUser(email, password) {
  // Validação de dados - demoramos mais tempo para perceber que possui alguma relação com 'createUser' -- necessidade de refatoração.
  if (!email || !email.includes('@') || !password || password.trim() === '') {
    //? bem LOW-LEVEL
    console.log('Invalid input!');
    return;
  }

  const user = {
    email: email,
    password: password,
  };

  // Salvar usuário no banco de dados - demoramos MENOS tempo para perceber que possui alguma relação com 'createUser' -- sem necessidade de refatoração, pode permanecer nesta função.
  database.insert(user); //? bem HIGH-LEVEL (não precisa saber como o banco de dados funciona)
}
