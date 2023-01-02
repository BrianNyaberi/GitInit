/**
 * Created_by: Brian Nyaberi
 * Created_date: 01-Jan-2023
 * About: Backend express server for my ToDo app
 * Last Modified_by: 
 */

const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({message: "Hi there"})
});


router.get('/herb', (req, res) => {
    res.json({message: "Twende kwa vic, ndio upate herb"})
});

module.exports = router;

