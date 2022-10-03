import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
const fields = {
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    //1 -> '1'// registration-> BlueMountain123 -> hash('BlueMountain124') -> "sfkdssfsdf"
    // login-> username and password            -> hash('password')
    required: true,
  },
};

const UserSchema = new Schema(fields, { timestamps: true });

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 0);
  }
  next();
});

const User = mongoose.model('User', UserSchema);

export default User;
