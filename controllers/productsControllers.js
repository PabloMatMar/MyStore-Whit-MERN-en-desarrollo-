const Product = require('../models/products');


const getGamesWithTheSameDevelopers = async (req, res) => {
    try {
        let products;
        const data = JSON.parse(req.query.object);
        data.developers != undefined && typeof (data.developers) == 'string' ? (products = await Product.find({ "developers": data.developers }, { _id: 0, __V: 0 }), res.status(200).json(products)) : res.status(400).json({ error: 'HTTP query parameter error' });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ msj: err.message });
    };
};

const getSharedProducts = async (req, res) => {
    try {
        let products;
        const data = JSON.parse(req.query.object);
        data.console != undefined && data.name != undefined && typeof (data.console) == 'string' && typeof (data.name) == 'string' ?
            (products = await Product.find({ "name": data.name, "console": data.console }, { _id: 0, __v: 0 }), res.status(200).json(products)) : res.status(400).json({ error: 'HTTP query parameter error' })

    } catch (err) {
        console.log(err.message);
        res.status(500).json({ msj: err.message });
    }
};


const getProducts = async (req, res) => {
    try {
        let products = await Product.find({}, { _id: 0, __v: 0 });
        res.status(200).json(products);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ msj: err.message });
    };
};


const getSpecificProduct = async (req, res) => {
    try {
        let products;
        const data = JSON.parse(req.query.object);
        if (data.console != undefined && data.exclusiveness != undefined && data.genre != undefined)
            products = await Product.find({ "console": data.console, "exclusiveness": data.exclusiveness, "genre": data.genre }, { _id: 0, __v: 0 });
        else if (data.console != undefined && data.genre != undefined)
            products = await Product.find({ "console": data.console, "genre": data.genre }, { _id: 0, __v: 0 });
        else if (data.console != undefined && data.exclusiveness != undefined)
            products = await Product.find({ "console": data.console, "exclusiveness": data.exclusiveness }, { _id: 0, __v: 0 });
        else if (data.console != undefined)
            products = await Product.find({ "console": data.console }, { _id: 0, __v: 0 });
        else if (data.genre != undefined)
            products = await Product.find({ "genre": data.genre }, { _id: 0, __v: 0 });
        else
            res.status(400).json({ error: 'HTTP query parameter error' });

        res.status(200).json(products);

    } catch (err) {
        console.log(err.message);
        res.status(500).json({ msj: err.message });
    };
};

module.exports = {
    getProducts,
    getSpecificProduct,
    getSharedProducts,
    getGamesWithTheSameDevelopers
};