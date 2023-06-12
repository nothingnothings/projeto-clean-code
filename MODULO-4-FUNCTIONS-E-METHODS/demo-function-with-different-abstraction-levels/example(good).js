function handleCreateUserRequest(request) {
  const { email, password } = request;
  try {
    // createUser('test@test.com', 'testers');
    createUser(email, password);
  } catch (error) {
    outputErrorMessage(error.message);
  }
}

function createUser(user) {
  //high-level
  //   if (inputIsNotValid(user)) {
  //     outputErrorMessage('Invalid input!');
  //     return;
  //   }

  //high-level
  validateUser(user);

  saveUser(user);
}

// const inputIsNotValid = (user) => {
//   //high-level
//   const { email, password } = user;

//   return (!email || !isEmail(email) || !password || !passwordIsNotEmpty(password) //tudo no mesmo level de abstraction (low)...
//   );
// };

//high-level (mas ainda abaixo de 'createUser()')
const validateUser = (user) => {
  const { email, password } = user;

  if (!email || !isEmail(email) || !password || !passwordIsNotEmpty(password)) {
    throw new Error('Invalid input!');
  }
};

const isEmail = (email) => {
  return email.includes('@'); //low-level
};

const passwordIsNotEmpty = (trimmedPassword) => {
  return trimmedPassword !== ''; //low-level
};

const outputErrorMessage = (message) => {
  const newError = new Error(message);
  throw newError; //low-level - vai 'bubble up' e vai CRASHAR O APP...
};

const saveUser = (user) => {
  database.insert(user);
};

const user = handleCreateUserRequest({
  email: 'exemplo@exemplo.com',
  password: 'password',
});

console.log(user);
