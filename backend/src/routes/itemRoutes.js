const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')

router.get('/:id', itemController.findById);

router.get('/', itemController.findAll);

router.put('/', itemController.create);