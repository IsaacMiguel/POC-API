const express = require('express');
const app = express();
const port = 3000;
const playersRouter = require('./players/players');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/status', (req, res) => {
  res.json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0'
  });
});

app.use('/players', playersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});