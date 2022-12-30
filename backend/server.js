const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.port || 5000; 

// Connect to DB

mongoose
.set("strictQuery", false)
.connect(process.env.MONGO_URL)
.then(()=> console.log(`Connected to MongoDb`))
.catch((err) => console.log(err));


app.listen(PORT, ()=> console.log(`Listen on: ${PORT}`));