
const express = require('express')
const router = express.Router()
const countryController = require('../controllers/countryController')

router.get('/:id', countryController.findById);

router.get('/', countryController.findAll);

router.put('/', countryController.create);