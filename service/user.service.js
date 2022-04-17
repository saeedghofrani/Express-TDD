let userArray = [];
let counter = 1;

function User(username, password) {
  this.username = username;
  this.password = password;
  this.id = counter++;
};

function getUserById(id) {
  return userArray.find((user) => !!user && user.id === id) || null;
}

function getUserByUsername(username) {
  return userArray.find((user) => !!user && user.username === username) || null;
}

function createUser({ username, password }) {
  userArray.push(new User(username, password));
}

module.exports = { getUserById, getUserByUsername, createUser };
