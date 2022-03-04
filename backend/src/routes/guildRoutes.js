
const express = require('express')
const router = express.Router()
const guildController = require('../controllers/guildController')

router.get('/:id', guildController.findById);

router.get('/', guildController.findAll);

router.put('/', guildController.create);