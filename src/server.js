import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

const app = express();

// Hot load react components in dev environment.
const isProduction = process.env.NODE_ENV === 'production';
if (!isProduction) {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
}

// Serve the static files at this location.
const staticPath = path.resolve(__dirname, '../dist');
app.use(express.static(staticPath));

// Run the server on the specified port.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server listening at http://localhost:" + port);
});
