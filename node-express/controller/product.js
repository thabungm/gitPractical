import Product from '../models/Product';

// Create
export const create = async (data) => {
  const product = new Product(data);
  const newProduct = await product.save();

  return newProduct;
};

// Read
export const get = async (params) => {
  const result = Product.find({});
  return result;
};

export const getOne = async (id) => {
  const result = Product.findById(id);

  return result;
};

// Delete
export const remove = async (id) => {
  const result = Product.findByIdAndDelete(id);

  return result;
};

// Update
export const updateOne = async (id, data) => {
  const result = await Product.findByIdAndUpdate(id, data);

  return result;
};
