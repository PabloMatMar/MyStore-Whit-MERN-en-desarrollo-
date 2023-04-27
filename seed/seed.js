// npm run seed para poblar la base de datos
const mongoose = require('mongoose');
// Se requieren los esquemas para introducir los datos acordes a los mismos en la base de datos(mongo en este caso)
const Providers = require('../models/providers');
const Products = require('../models/products');

//Protejemos la url de nuestra base de datos con un dotenv
require('dotenv').config();
const db = process.env.DB_MONGO;

// conectamos a la base
mongoose
    .connect(db)
    .then(() => console.log('mongodb SEED connection success'))
    .catch((error) => console.log(error));

//creamos los provedores y los productos
const providers = [

    {
        "company_name": "Gatos0",
        "CIF": "F7DS9F98S",
        "address": "Calle del persa",
    },
    {
        "company_name": "Gatos1",
        "CIF": "F9S7D98SD",
        "address": "Calle del egipcio",
    },
    {
        "company_name": "Gatos2",
        "CIF": "F9S7D9FSD",
        "address": "Calle de mala gata",
    },
    {
        "company_name": "Gatos3",
        "CIF": "79FSD98",
        "address": "Calle de la human-cat",
    },
    {
        "company_name": "Gatos4",
        "CIF": "GSF799GS9D",
        "address": "Calle del gatito",
    },
    {
        "company_name": "Gatos5",
        "CIF": "G9S7DG9SD",
        "address": "Calle de todas las razas",
    },
    {
        "company_name": "Gatos6",
        "CIF": "GSD98GSD",
        "address": "Calle de gatos",
    },
    {
        "company_name": "Gatos7",
        "CIF": "G8SD6D69GSD",
        "address": "Calle del lince",
    }, {
        "company_name": "Gatos8",
        "CIF": "G87SF9S",
        "address": "Calle del callejero",
    },
    {
        "company_name": "Gatos9",
        "CIF": "79SFDGSD9",
        "address": "Calle del minino",
    }

]

const products = [
    {
        "image": "./imgGames/spiderMan.jpg",
        "name": "Spider-Man Miles Morales",
        "relevance": 4.7,
        "price": 60.25,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/horizon.jpg",
        "name": "Horizon",
        "relevance": 4.7,
        "price": 79.98,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/ratchetClank.jpg",
        "name": "Ratchet Clank",
        "relevance": 4.8,
        "price": 79.19,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/granTurismo.jpg",
        "name": "Gran Turismo",
        "relevance": 4.5,
        "price": 46.98,
        "age": 3,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/callOfDuty.jpg",
        "name": "Call Of Dutty",
        "relevance": 4.6,
        "price": 79.99,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/sonicFrontiers.jpg",
        "name": "Sonic Frontiers",
        "relevance": 4.6,
        "price": 39.99,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/minecraftLegends.jpg",
        "name": "Minecraft Leyends",
        "relevance": 4.2,
        "price": 49.99,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/nickelodeonAllStarBrawl.jpg",
        "name": "Nickelodeon All Star Brawl",
        "relevance": 4.3,
        "price": 32.67,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/metroExodus.jpg",
        "name": "Metro Exodus",
        "relevance": 4.3,
        "price": 29.70,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/likeADragonIshin.jpg",
        "name": "Like A Dragon: ISHIN",
        "relevance": 4.7,
        "price": 62.78,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/howartsLegacy.jpg",
        "name": "Howarts Legacy",
        "relevance": 4.8,
        "price": 75.27,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/forspoken.jpg",
        "name": "Forspoken",
        "relevance": 4.3,
        "price": 70.05,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/wolongFallenDinasty.jpg",
        "name": "WO LONG Fallen Dinasty",
        "relevance": 3.8,
        "price": 72.99,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "./imgGames/scarsAbove.jpg",
        "name": "SCARS above",
        "relevance": 4.2,
        "price": 42.84,
        "age": 18,
        "console": "Play Station 5"

    },
]


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
    console.log('seedDB function ran');
};
//   Llamamos a la funcion que vacia y puebla la base de datos, una vez hecho procede a cerrar la conecion con mongoose
seedDB().then(() => {
    console.log('seeds closed connection');
    mongoose.connection.close();
});


