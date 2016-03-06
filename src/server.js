import express from 'express';
import path from 'path';
import axios from 'axios';

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

// Cache search results to avoid repeat requests.
let eventCache = new Map();

// Serve a JSON list of events when queried.
app.get('/events/:artist', (req, res) => {
  const artist = req.params.artist.toLowerCase();

  // Check the cache first.
  if (eventCache.has(artist)) {
    return res.json(eventCache.get(artist));
  }

  const url = `http://api.bandsintown.com/artists/${artist}/events.json?app_id=wamb&api_version=2.0`;
  axios.get(url)
    .then(response => {
      eventCache.set(artist, response.data);
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.json([]);
    });
});

// Run the server on the specified port.
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Server listening at http://localhost:" + port);
});

export default server;
