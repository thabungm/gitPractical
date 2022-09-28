// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import Product from './models/Product';
import { connect } from './mongo';

const app = express();
// PORT
// http://facebook.com -> 112.22.33.44:80
// https://facebook.com -> 112.22.33.44:443
const PORT = 3000;
app.use(bodyParser.json());
connect();

const checkEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

app.post('/products', async (req, res) => {
  try {
    const product = new Product({
      name: 'Laptop',
      description: 'Brand new laptop',
      price: 500,
      imageUrl: 'https://someUrl.com',
    });
    const newProduct = await product.save();
    res.json({ data: newProduct });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

// proxy server (nginx/apache) 443/80 -> 3000
// virtual server
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to REST API' });
});

const validateInput = (data) => {
  return true;
};

const validate = (req, res, next) => {
  let error = validateInput(req.query); // custom logic to validate
  if (error) {
    return next('Error inside validate');
  }
  next();
};

// middlewares
const checkAuth = (req, res, next) => {
  next();
  // next('Error inside check auth');
};

app.get('/even-checker', checkAuth, validate, (req, res) => {
  // if user is authorize then only call this function
  // perform validation here
  // S.R.P
  const input = req.query;

  if (checkEven(input.number)) {
    return res.json({ result: `GET ${input.number} is EVEN` });
  }

  return res.json({ result: `GET ${input.number} is ODD` });
});

app.post('/even-checker', (req, res) => {
  const input = req.body;
  console.log('req.body----->', req.body);
  if (checkEven(input.number)) {
    return res.json({ result: `POST ${input.number} is EVEN` });
  }

  return res.json({ result: `POST ${input.number} is ODD` });
});

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
