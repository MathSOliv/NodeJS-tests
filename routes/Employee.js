'use strict'
const express = require('express')
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.post('/', employeeController.getAllEmployee);

modeule.export = router