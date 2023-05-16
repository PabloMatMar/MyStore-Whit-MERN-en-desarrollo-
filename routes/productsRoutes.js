const express = require('express');
const router = express.Router();

const productsControllers = require('../controllers/productsControllers')



router.get('/', productsControllers.getProducts);
router.get('/filter?', productsControllers.getSpecificProduct);
router.get('/shared?', productsControllers.getSharedProducts);
router.get('/developers/:developers', productsControllers.getGamesWithTheSameDevelopers);
router.get('/name/:name', productsControllers.getProductByName)


module.exports = router;