import Product from '../models/Product';

// Create
export const create = async (data) => {
  const product = new Product(data);
  const newProduct = await product.save();

  return newProduct;
};

// Read
// pagination, search, sort, filter
export const get = async (params) => {
  // name = 'macbook'
  // skip, limit, sort
  const { keyword, sort = { createdAt: -1 }, limit = 3, page = 1 } = params;
  // const search
  // const search = keyword ? { name: keyword } : {};
  let search;
  if (keyword) {
    search = { name: keyword };
  } else {
    search = {};
  }
  const skip = page * limit;
  /*
  50 records total
  per page = 5 
  currentPage = 2
  perPage*currentPage
  */
  const result = await Product.find(search).sort(sort).skip(skip).limit(limit);
  const count = await Product.find(search).count();
  return { result, count };
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
