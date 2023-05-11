// npm run seed para poblar la base de datos
const mongoose = require('mongoose');
// Se requieren los esquemas para introducir los datos acordes a los mismos en la base de datos(mongo en este caso)
const Providers = require('../models/providers');
const Products = require('../models/products');
const products = require('./games').products;
const providers = require('./games').providers;
const testValuesObj = require('./testValuesDB').testing;
const emojis = require('emojis-list');

//Protejemos la url de nuestra base de datos con un dotenv
require('dotenv').config();
const db = process.env.DB_MONGO;


products.map(product => product.provider = 'Company' + Math.trunc(Math.random() * 10))

//   seeding function
const seedDB = async () => {
    // eliminamos los provedores existentes antes de poblar la base de datos
    await Providers.deleteMany({});
    //Insertamos los provedores
    await Providers.insertMany(providers);

    //Traemos todos los provedores insertados
    const allProviders = await Providers.find({});
    //Creamos un array vacio donde introducimos la id de cada provedor
    let ids = []
    allProviders.map(provider => ids.push(provider._id))
    //Mapeamos los productos y le insertamos una id de un provedor al azar usando mathrandom para añadir un indice
    products.map(product => product.provider = ids[Math.trunc(Math.random() * 10)])
    //Eliminamos los productos que pudiera haber en la base de datos e insertamos los nuevos
    await Products.deleteMany({});
    await Products.insertMany(products);
    console.log('seedDB function run');
};
//Si todos los parametros pasan el test entonces llamamos a la funcion, si no advertimos para que se cambie lo que te pida.
if (testValuesObj) {
    //Conectamos la seed a la base de mongo y llamamos a la funcion que vacia y puebla la base de datos, una vez hecho procede a cerrar la conecion con mongo
    mongoose
    .connect(db)
    .then(() => console.log('mongodb SEED connection success'))
    .catch((error) => console.log(error));

    seedDB().then(() => {
        console.log('seeds closed connection');
        mongoose.connection.close();
    });
} else {
    console.log(emojis[2959], emojis[2959], 'Before sending the data to mongo change what the console.log of testValuesDB tells you.', emojis[2959], emojis[2959]);
};


