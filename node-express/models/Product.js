import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const fields = {
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Draft'],
  },
};
// createdAt, updatedAt
const ProductSchema = new Schema(fields, { timestamps: true });
const Product = mongoose.model('Product', ProductSchema);

export default Product;
