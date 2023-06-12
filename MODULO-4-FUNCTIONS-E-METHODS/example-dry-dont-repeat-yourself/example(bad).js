
//EXEMPLO DE 'BAD CODE' - REPEATING OURSELVES...
function createUser(email, password) {
  if (!inputIsValid(email, password)) {
    showErrorMessage('Invalid input!');
  }

  saveUser(email, password);
}

function createSupportChannel(email) {
  if (!email || !email.includes(`@`)) {
    console.log('Invalid email - could not create channel');
  }
  //   ...
}

function inputIsValid(email, password) {
  return email && email.includes(`@`) && password && password.trim() !== ``;
}
