const db = require('./db');

const onSocketConnect = io => socket => {

  // TODO 2.1 Listen for login events (eg "LOGIN") from client and save the user using db.create(username, socket.id)
  // TODO 2.2 Prevent users from using an existing username using the "acknowledgement" from the client
  // TODO 2.3 Emit an update user list event (eg "UPDATE_USER_LIST") to all clients when there is a login event
  // TODO 2.4 Listen for "disconnect" events and remove the socket user from the users object (*hint: db.create(username, socket.id) returns the logout fn)
  // TODO 2.5 emit "UPDATE_USER_LIST" after user has been "logged out" and is removed from "users" object

  // TODO 3.1 Check if a "toUser" is specified and only broadcast to that user
  // TODO 3.2 Include information about the "fromUser" so the client can filter draw events from other users and only display events from the selected user

  // TODO 1.4 listen for draw action-type events (eg "DRAW_POINTS") from the socket and broadcast them to others sockets.

};

const connect = server => {
  // TODO 1.1 import socket.io
  // TODO 1.2 attach a socket to the express server by passing the express server instance as an argument when socket.io is invoked

  // TODO 1.3 listen for new connections and use the provided "onSocketConnect" function
}

module.exports = connect;
