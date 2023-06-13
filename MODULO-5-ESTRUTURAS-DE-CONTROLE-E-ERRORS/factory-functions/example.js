function buildUser(name, age) { // constrói 1 user... por isso é uma factory function.
  return {
    name,
    age,
    sayHi: function () {
      console.log(`Hi! My name is ${name} and I am ${age} years old!`);
    },
  };
}
