require('dotenv').config();
const express = require('express');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;
app.prepare().then(() => {
  const server = express();
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/') {
      app.render(req, res, '/', query);
    } else {
      handle(req, res, parsedUrl);
    }
  });
  server.listen(PORT, () => {
    console.info(`localhost:${PORT}`);
  });
}).catch((err) => {
  console.error(err);
});
