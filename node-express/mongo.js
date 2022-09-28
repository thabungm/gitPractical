import mongoose from 'mongoose';

const uri =
  'mongodb+srv://user:password@cluster0.w3cje.mongodb.net/?retryWrites=true&w=majority';

export const connect = () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
  });
};
