import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './mongo';
import { create, get, getOne, remove, updateOne } from './controller/product';
import { login, register } from './controller/auth';

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  try {
    const result = await register(req.body);
    return res.json(result);
  } catch ({ message }) {
    res.status(400).send({ message });
  }
});

app.post('/login', async (req, res) => {
  try {
    const result = await login(req.body);
    return res.json(result);
  } catch ({ message }) {
    res.status(400).send({ message });
  }
});
app.post('/products', async (req, res) => {
  try {
    const data = await create(req.body);
    return res.json({ data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.get('/products', async (req, res) => {
  try {
    const data = await get();
    return res.json({ data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.get('/products/:productId', async (req, res) => {
  try {
    const data = await getOne(req.params.productId);
    return res.json({ data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.delete('/products/:productId', async (req, res) => {
  try {
    const data = await remove(req.params.productId);
    return res.json({ data });
  } catch (error) {
    return res.status(400).json(error);
  }
});

app.put('/products/:productId', async (req, res) => {
  try {
    const data = await updateOne(req.params.productId, req.body);
    return res.json({ data });
  } catch (error) {
    res.status(400).send(error);
  }
});

connect();

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
