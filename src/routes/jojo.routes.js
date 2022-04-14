const express = require('express');
const router = express.Router();

const Jojoscontrollers = require('../controllers/jojo.controllers');

router.get('/personagens', Jojoscontrollers.findJojo);
router.get('/personagens/:id', Jojoscontrollers.findJojoById);

router.post('/add', Jojoscontrollers.addJojo);

router.delete('/delete/:id', Jojoscontrollers.deleteJojo);

router.put('/uptade/:id', Jojoscontrollers.updateJojosController);

module.exports = router;
