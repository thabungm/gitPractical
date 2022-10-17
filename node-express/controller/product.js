import Product from "../models/Product";

// Create
export const create = async (data) => {
  const product = new Product(data);
  const newProduct = await product.save();

  return newProduct;
};

// Read
export const get = async (params) => {
  // search by name
  // sort by price
  // filter status: Active / Draft
  // pagination limit, page number, skip
  const { keyword, sort = { createdAt: 1 }, limit = 3, page = 1 } = params;

  /**
   total 50

   per page/limit= 5
   page=3
    
   */
  const skip = limit * (page - 1);
  // keyword-> Macbook
  let search;
  if (keyword) {
    search = { name: { $regex: new RegExp(keyword, "i") } }; // name -> Macbook laptop , Mac
  } else {
    search = {};
  }
  console.log(params);
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
