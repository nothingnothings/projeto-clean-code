//EXEMPLO DE 'GOOD CODE' - NÃO ESTAMOS MAIS 'REPEATING OURSELVES'....
function createUser(email, password) {
  if (!inputIsValid(email, password)) {
    showErrorMessage('Invalid input!');
  }

  saveUser(email, password);
}

function createSupportChannel(email) {
  if (!emailIsValid(email)) {
    showErrorMessage('Invalid email - could not create channel');
  }
  //   ...
}

function inputIsValid(email, password) {
  return emailIsValid(email) && passwordIsValid(password);
}

function emailIsValid(email) {
  return email && email.includes(`@`);
}

function passwordIsValid(password) {
  return password && password.trim() !== ``;
}
