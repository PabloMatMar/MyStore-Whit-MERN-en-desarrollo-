const Product = require('../models/products');
const Providers = require('../models/providers');


const getProducts = async (req, res) => {

    try {
        const products = await Product.find({}, { _id: 0, __v: 0 });
        res.json(products);
    } catch (err) {
        req.status(500).send('Server Error, GET Method');
    }
}


const getSpecificProduct = async (req, res) => {
    try {
        const product = await Product.find({ id: req.params.id }, { _id: 0, __v: 0 }).populate({path: 'provider', Model: Providers });
        res.json(product);

    } catch (err) {
        const product = await Product.find({ id: req.params.id });
        if (product === undefined) {
            req.status(404).send('This product doesnt exist');
        } else {
            req.status(500).send('Server Error, GET Method');
        }
    }
}

module.exports = {
    getProducts,
    getSpecificProduct
}