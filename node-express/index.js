import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './mongo';
import { create, get, getOne, remove } from './controller/product';

const app = express();
const PORT = 3000;
app.use(bodyParser.json());

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

connect();

app.listen(PORT, () => {
  console.log(`App listening at ${PORT}`);
});
