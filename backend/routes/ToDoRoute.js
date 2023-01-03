/**
 * Created_by: Brian Nyaberi
 * Created_date: 01-Jan-2023
 * About: Backend express server for my ToDo app
 * Last Modified_by: 
 */

const {Router} = require('express');
const { getToDo } = require('../controllers/controller');

const router = Router();

router.get('/', getToDo);


module.exports = router;

