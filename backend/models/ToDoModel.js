/**
 * Created_by: Brian Nyaberi
 * Created_date: 01-Jan-2023
 * About: Backend express server for my ToDo app
 * Last Modified_by: 
 */

const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('ToDo', todoSchema)
