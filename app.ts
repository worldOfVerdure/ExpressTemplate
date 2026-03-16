import express from 'express';

const app = express();

app.use((req, res, next) => {
  if (req.url === '/favicon.ico') return res.status(204).end();
  next();
});//Remove favicon requests.

app.listen(3000);
