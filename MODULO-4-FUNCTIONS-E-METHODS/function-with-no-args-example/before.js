// function saveUser(email, password) {  //TODO podemos reduzir para apenas 1 PARAMETER...
//   const user = {
//     id: Math.random().toString(),
//     email: email,
//     password: password,
//   };

//   db.insert('users', user);
// }

// saveUser('test@test.com', 'testers');

const newUser = { // TODO - reduzimos a function call para apenas 1 PARAMETER...
  id: Math.random().toString(),
  email: 'exemplo@exemplo.com',
  password: '123456',
};

function saveUser(user) {
  db.insert('users', user);
}

saveUser(newUser);

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.id = Math.random().toString();
  }

  save() {
    db.insert('users', this);
  }
}

const user = new User('test@test.com', 'testers');
user.save(); // TODO - agora podemos chamar o method save() SEM NENHUM PARAMETER, pq é chamado de dentro do OBJECT...

let isLoggedIn = false;

function toggleLoginStatus() {
  isLoggedIn = !isLoggedIn;
}

toggleLoginStatus();
