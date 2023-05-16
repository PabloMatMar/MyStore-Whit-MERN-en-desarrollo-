const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/productsControllers')


router.get('/shared?', productsControllers.getSharedProducts);
router.get('/filter?',productsControllers.getSpecificProduct);
router.get('/', productsControllers.getProducts);


module.exports = router;