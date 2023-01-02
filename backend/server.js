/**
 * Created_by: Brian Nyaberi
 * Created_date: 01-Jan-2023
 * About: Backend express server for my ToDo app
 * Last Modified_by: 
 */

// 
const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes/ToDoRoute')

require('dotenv').config();

const app = express();
const PORT = process.env.port || 5000; 

// Connect to DB
mongoose
.set("strictQuery", false)
.connect(process.env.MONGODB_URL)
.then(()=> console.log(`Connected to MongoDb`))
.catch((err) => console.log(err));

app. use(routes);

app.listen(PORT, ()=> console.log(`Listen on: ${PORT}`));