const express = require('express');
const app = express();
const port = 3000;
const playersRouter = require('./players/players');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.use('/players', playersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});