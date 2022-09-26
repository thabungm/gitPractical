// console.log('hello world');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// PORT
// http://facebook.com -> 112.22.33.44:80
// https://facebook.com -> 112.22.33.44:443
const PORT = 3000;
app.use(bodyParser());

const checkEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

// proxy server (nginx/apache) 443/80 -> 3000
// virtual server
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to REST API' });
});

app.post('/even-checker', (req, res) => {
  const input = req.body;
  console.log('req.body----->', req.body);
  if (checkEven(input.number)) {
    return res.json({ result: `POST ${input.number} is EVEN` });
  }

  return res.json({ result: `POST ${input.number} is ODD` });
});

app.get('/even-checker', (req, res) => {
  const input = req.query;
  console.log(input);
  if (checkEven(input.number)) {
    return res.json({ result: `GET ${input.number} is EVEN` });
  }

  return res.json({ result: `GET ${input.number} is ODD` });
});

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
