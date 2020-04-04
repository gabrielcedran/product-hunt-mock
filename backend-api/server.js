const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect(
  'mongodb://localhost:27017/product-hunt-mock', 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
);
  
requireDir('./src/models');
  
app.use(express.json());
app.use(cors());
app.use('/api', require('./src/routes'));

app.listen(3001);