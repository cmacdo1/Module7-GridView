const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Connecting to the database
const mongoose = require('mongoose');
const MONGO_DATA_BASE = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);

//asynchronous connection
mongoose.connect(MONGO_DATA_BASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  }).then(() => {
    console.log('Mongo Database Connection was Successful');
  }).catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
