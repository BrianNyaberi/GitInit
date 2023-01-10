/**
 * Created_by: Brian Nyaberi
 * Created_date: 01-Jan-2023
 * About: Backend express server for my ToDo app
 * Last Modified_by: 
 */

const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo)
}

module.exports.saveToDo = (req, res) => {
    const { text} = req.body;

    ToDoModel
    .create({ text })
    .then((data) => {
        console.log("Todo item added sucessfully.")
        console.log(data)
        res.send(data)
    })
    .catch((err) => console.log(err));
}

module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body();
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.send("Todo item updtaded sucessfully."))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body();
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Todo item deleted sucessfully."))
    .catch((err) => console.log(err))
}