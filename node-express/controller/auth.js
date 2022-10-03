import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const register = async (data) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error('Email already exist');
  }
  const user = new User(data);

  await user.save();
  return user;
};

export const login = async (data) => {
  const { email, password } = data;
  // find user by email
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error('User does not exists');
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  // if the hashes are equal -> logged-in and generate token
  if (isPasswordMatch) {
    const token = await jwt.sign({ userId: user._id }, 'secret', {
      expiresIn: 3600,
    });
    return { token };
  }
  throw new Error('Invalid credentials');
  // jwt token
};
