function buildUserByType(name, type) {
  let greetFn;

  if (type === 'friendly') {
    greetFn = function () {
      console.log(`Hi! My name is ${name}!`);
    };
  } else if (type === 'unfriendly') {
    greetFn = function () {
      console.log(`Hm? What do you want?`);
    };
  }

  return {
    name: name,
    greet: greetFn,
  };
}

const friendlyUser = buildUserByType('John', 'friendly');

friendlyUser.greet(); // Hi! My name is John!

const unfriendlyUser = buildUserByType('John', 'unfriendly');

unfriendlyUser.greet(); // Hm? What do you want?
