/**
 * Created_by: Brian Nyaberi
 * Created_date: 01-Jan-2023
 * About: Backend express server for my ToDo app
 * Last Modified_by: 
 */

const {Router} = require('express');
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/controller');

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);
 
module.exports = router;

