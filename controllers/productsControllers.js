const Product = require('../models/products');

const getProductByName = async (req, res) => {
    try {
        let products;
        const data = req.params.name.slice(1);
        products = await Product.find({ "name": data }, { _id: 0, __V: 0 }), res.status(200).json(products)
    } catch (err) {
        res.status(500).json({ msj: err.message });
    };
};


const getGamesWithTheSameDevelopers = async (req, res) => {
    try {
        let products;
        const data = req.params.developers.slice(1)
        products = await Product.find({ "developers": data }, { _id: 0, __V: 0 }), res.status(200).json(products)
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

//NOTA PARA getSpecificProduct = async (req,res) => {}
//Los valores age, price y opinion son filtrados en cada peticion pues tienen valores por defecto que devuelven
//TODOS los obejtos en ese campo, los demas no, ya que los valores por defecto que devuelvan todo en el resto de
//categorias NO ADMITIRIAN UNA LOGICA DE TRABAJO SENCILLA Y CLARA a la hora de formular la peticion DESDE EL 
//FRONTED.Cada opcion hace filtros por los campos que exige SU if mas los campos age, price and opinion que pueden 
//o no estar por defecto en la peticion.

//Filtra por todas las convinaciones de 6 categorias!
const getSpecificProduct = async (req, res) => {
    try {
        let products;
        const data = JSON.parse(req.query.object);
        if (data.console != undefined && data.exclusiveness != undefined && data.genre != undefined)

            products = await Product.find({ "console": data.console, "exclusiveness": data.exclusiveness, "genre": data.genre, "age": data.age, "price": data.price, "opinion": data.opinion }, { _id: 0, __v: 0 });

        else if (data.console != undefined && data.genre != undefined)

            products = await Product.find({ "console": data.console, "genre": data.genre, "age": data.age, "price": data.price, "opinion": data.opinion }, { _id: 0, __v: 0 });

        else if (data.console != undefined && data.exclusiveness != undefined)

            products = await Product.find({ "console": data.console, "exclusiveness": data.exclusiveness, "age": data.age, "price": data.price, "opinion": data.opinion }, { _id: 0, __v: 0 });

        else if (data.console != undefined)

            products = await Product.find({ "console": data.console, "age": data.age, "price": data.price, "opinion": data.opinion }, { _id: 0, __v: 0 });

        else if (data.genre != undefined)

            products = await Product.find({ "genre": data.genre, "age": data.age }, { _id: 0, __v: 0 });

        //Añado una ultima opcion de peticion para los casos de filtrado en que solo se pida una o
        //varias de las opciones que vienen por defecto en la peticion. O ninguna ya que por defecto el filtro
        // devuelve todo.
        else
            products = await Product.find({ "age": data.age, "price": data.price, "opinion": data.opinion }, { _id: 0, __v: 0 });


        res.status(200).json(products);

    } catch (err) {
        console.log(err.message);
        const data = JSON.parse(req.query.object);
        data.console == undefined && data.exclusiveness == undefined && data.genre == undefined ?
            res.status(500).json({ msj: err.message }) : res.status(400).json({ msj: 'HTTP query parameter error, dont enter parameters by hand!' });

    };
};

module.exports = {
    getSpecificProduct,
    getSharedProducts,
    getGamesWithTheSameDevelopers,
    getProductByName
};