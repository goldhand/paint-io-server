// fake "users" database
const users = {}; // {username: socket.id}

/**
 * adds {username: id} to the users object
 * @param {string} username - username
 * @param {string} id - socket.id
 * @returns {function} removeUser - removeUser() function removes user from "users"
 */
const create = (username, id) => {
  users[username] = id;
  return () => {
    delete users[username];
  };
};

const userExists = (username) =>
  Object.prototype.hasOwnProperty.call(users, username);

const get = (username) => userExists(username)
  ? users[username]
  : false;

const all = () => users;

module.exports = {
  create,
  get,
  all,
};
