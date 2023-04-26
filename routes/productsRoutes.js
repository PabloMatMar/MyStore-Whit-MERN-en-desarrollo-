const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/productsControllers')


router.get('/', productsControllers.getProducts)

router.get('/:id',productsControllers.getSpecificProduct)


module.exports = router;