
const express = require('express')
const router = express.Router()
const characterController = require('../controllers/characterController')

router.get('/:id', characterController.findById);

router.get('/', characterController.findAll);

router.put('/', characterController.create);