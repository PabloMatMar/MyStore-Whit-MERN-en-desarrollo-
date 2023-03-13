const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsControllers')


router.get('/', productsController.getProducts)

router.get('/:id',productsController.getSpecificProduct)


module.exports = router;