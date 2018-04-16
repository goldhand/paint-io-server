const Express = require('express');
const connectSocket = require('./src/socket');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

const DEFAULT_PORT = 3000;

/** @const server port */
const PORT = process.env.PORT || DEFAULT_PORT;

/** @const create a new express app */
const app = new Express();

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
}));

const server = app.listen(PORT, error => {
  /* eslint-disable no-console */
  if (error) {
    console.error(error);
  } else {
    console.info(
      '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  }
  /* eslint-enable no-console */
});

// set up socket.io
connectSocket(server);
