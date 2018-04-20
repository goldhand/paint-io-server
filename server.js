const Express = require('express');
const connectSocket = require('./src/socket');

const DEFAULT_PORT = 3000;

/** @const server port */
const PORT = process.env.PORT || DEFAULT_PORT;

/** @const create a new express app */
const app = new Express();

const server = app.listen(PORT, error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error);
  } else {
    console.info(
      '🌎 Listening on port %s.',
      PORT,
      PORT
    );
  }
  /* eslint-enable no-console */
});

// set up socket.io
connectSocket(server);
