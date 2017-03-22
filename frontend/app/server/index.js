const config = require('../config/');
const express = require('express');
const app = express();
const env = process.env.NODE_ENV || 'development';

if (config.env === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('../build/webpack.config');
  const compiler = webpack(webpackConfig);

  const webpackDevMiddleware = require('webpack-dev-middleware');
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));

  const webpackHotMiddleware = require('webpack-hot-middleware');
  app.use(webpackHotMiddleware(compiler));
}

app.use('/', express.static(`${__dirname}/../public`));
app.use('/items', express.static(`${__dirname}/../public/index.html`));

app.listen(config.SERVER_PORT, () => {
  console.log(`Server started at http://localhost:${config.SERVER_PORT}`);
});
