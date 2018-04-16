const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

const fsExists = (filePath) => {
  try {
    fs.accessSync(filePath);
    return true;
  } catch (err) {
    return false;
  }
};

const PROJECT_ROOT = process.cwd();
const createResolveProjectPath = (...addPath) =>
  (...relPath) => path.resolve(PROJECT_ROOT, ...addPath, ...relPath);

const resolveBuild = createResolveProjectPath('dist');

const config = {
  entry: [
    'paint-io-client',
  ],
  output: {
    filename: '[name].js',
    path: resolveBuild(),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};

let paintIOPath;
// use the github package
if (fsExists('../paint-io-client')) {
  paintIOPath = '../paint-io-client';
}
// use the amazon package
if (fsExists('../NodeJS-paint-io-client')) {
  paintIOPath = '../NodeJS-paint-io-client';
}

const resolvePaintIOClient = (...relPath) =>
  path.resolve(PROJECT_ROOT, paintIOPath, ...relPath);

const developmentConfig = {
  resolve: {
    alias: {
      ['paint-io-client']: resolvePaintIOClient('src/app.js'),
    },
  },
  module: {rules: [
    {
      exclude: /node_modules/,
      test: /\.css$/,
      include: [resolvePaintIOClient('src')],
      use: ['style-loader', 'css-loader'],
    },
    {
      exclude: /node_modules/,
      test: /\.js$/,
      include: [resolvePaintIOClient('src')],
      use: ['babel-loader'],
    },
  ]},
};

module.exports = paintIOPath
  ? {...config, ...developmentConfig}
  : config;
