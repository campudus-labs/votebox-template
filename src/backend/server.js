import path from 'path';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../frontend/index.html'));
});

export function start(port, cb) {
  app.listen(port, cb);
}

export default {
  start
};
