import { MongoClient, ServerApiVersion } from 'mongodb';

const uri =
  'mongodb+srv://demo:<pwd>@cluster0.w3cje.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

export const connect = () => {
  client.connect((err) => {
    const collection = client.db('test').collection('devices');
    // perform actions on the collection object
    console.log('error present', err);
    //   client.close();
  });
};

// export default connect;
