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
        "image": "../assets/spiderMan.jpg",
        "name": "Spider-Man Miles Morales",
        "relevance": 4.7,
        "price": 60.25,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/horizon.jpg",
        "name": "Horizon",
        "relevance": 4.7,
        "price": 79.98,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/ratchetClank.jpg",
        "name": "Ratchet Clank",
        "relevance": 4.8,
        "price": 79.19,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/granTurismo.jpg",
        "name": "Gran Turismo",
        "relevance": 4.5,
        "price": 46.98,
        "age": 3,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/callOfDuty.jpg",
        "name": "Call Of Dutty",
        "relevance": 4.6,
        "price": 79.99,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/sonicFrontiers.jpg",
        "name": "Sonic Frontiers",
        "relevance": 4.6,
        "price": 39.99,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/minecraftLegends.jpg",
        "name": "Minecraft Leyends",
        "relevance": 4.2,
        "price": 49.99,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/nickelodeonAllStarBrawl.jpg",
        "name": "Nickelodeon All Star Brawl",
        "relevance": 4.3,
        "price": 32.67,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/metroExodus.jpg",
        "name": "Metro Exodus",
        "relevance": 4.3,
        "price": 29.70,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/likeADragonIshin.jpg",
        "name": "Like A Dragon: ISHIN",
        "relevance": 4.7,
        "price": 62.78,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/howartsLegacy.jpg",
        "name": "Howarts Legacy",
        "relevance": 4.8,
        "price": 75.27,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/forspoken.jpg",
        "name": "Forspoken",
        "relevance": 4.3,
        "price": 70.05,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/wolongFallenDinasty.jpg",
        "name": "WO LONG Fallen Dinasty",
        "relevance": 3.8,
        "price": 72.99,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/scarsAbove.jpg",
        "name": "SCARS above",
        "relevance": 4.2,
        "price": 42.84,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/aeternaNoctis.jpg",
        "name": "Aeterna Noctis",
        "relevance": 4.4,
        "price": 40.31,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/valkyrieElysium.jpg",
        "name": "Valkyrie Elysium",
        "relevance": 4.5,
        "price": 72.9,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/astronite.jpg",
        "name": "Astronite",
        "relevance": 4.7,
        "price": 24.99,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/relayer.jpg",
        "name": "Relayer",
        "relevance": 4.6,
        "price": 59.90,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/evilWest.jpg",
        "name": "Evil West",
        "relevance": 4.0,
        "price": 36.58,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/aPlaguetaleRequiem.jpg",
        "name": "A Plaguetale Requiem",
        "relevance": 4.7,
        "price": 63.04,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/shadowWarrior.jpg",
        "name": "Shadow Warrior",
        "relevance": 3.7,
        "price": 40.20,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/fairyFencerFRefrainChord.jpg",
        "name": "Fairy Fencer F: Refrain Chord",
        "relevance": 4.1,
        "price": 59.99,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/neptuniaSisterVsSister.jpg",
        "name": "Neptunia: Sister Vs Sister",
        "relevance": 4.8,
        "price": 60.32,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/neptuniaReverse.jpg",
        "name": "Neptunia: Re Verse",
        "relevance": 4.3,
        "price": 50.39,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/unchartedElLegadoPerdido.jpg",
        "name": "UNCHARTED: El legado Perdido",
        "relevance": 4.7,
        "price": 34.47,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/sackBoyABigAventure.jpg",
        "name": "SACKBOY: A Big Aventure",
        "relevance": 4.6,
        "price": 69.75,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/finalFantasyVII.jpg",
        "name": "FINAL FANTASY VII",
        "relevance": 4.7,
        "price": 54.90,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/goodByeWorld.jpg",
        "name": "Good by world",
        "relevance": 4.1,
        "price": 39.99,
        "age": 3,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/8DoorsArumsAfterlifeAdvenure.jpg",
        "name": "8 DOORS: Arum`s after life advenure",
        "relevance": 4.8,
        "price": 29.99,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/deliverUsTheMoon.jpg",
        "name": "DELIVER US THE MOON",
        "relevance": 4.5,
        "price": 24.99,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/deathsDoor.jpg",
        "name": "DEATH`S DOOR",
        "relevance": 5.0,
        "price": 29.99,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/ghostBusterSpiritsUnleashed.jpg",
        "name": "GHOST BUSTER: Spirits Unleashed",
        "relevance": 3.3,
        "price": 40.31,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/vampireTheMasquerade.jpg",
        "name": "VAMPIRE: The masquerade",
        "relevance": 4.1,
        "price": 51.33,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/apsulovEndOfGods.jpg",
        "name": "APSULOV: end of gods",
        "relevance": 4.3,
        "price": 34.36,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/theCalistoProtocol.jpg",
        "name": "The Calisto Protocols",
        "relevance": 4.3,
        "price": 69.99,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/marthaIsDead.jpg",
        "name": "MARTHA IS DEAD",
        "relevance": 4.4,
        "price": 29.90,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/doNotOpen.jpg",
        "name": "DO NOT OPEN",
        "relevance": 4.8,
        "price": 30.12,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/theWine.jpg",
        "name": "THE WINE",
        "relevance": 4.8,
        "price": 26.87,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/fiveNightsAtFreddysSecurityBreach.jpg",
        "name": "FIVE NIGHTS AT FREDDY`S",
        "relevance": 4.5,
        "price": 42.94,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/stray.jpg",
        "name": "STRAY",
        "relevance": 4.7,
        "price": 40.23,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/kenaBridgeOfSpirits.jpg",
        "name": "KENA: Bridge of the spirits",
        "relevance": 4.7,
        "price": 53.23,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/steelRising.jpg",
        "name": "STEEL RISING",
        "relevance": 4.5,
        "price": 59.62,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/gothamKnights.jpg",
        "name": "GOTHAM KNIGTHS",
        "relevance": 4.1,
        "price": 75.45,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/NBA2K23.jpg",
        "name": "NBA 2K 23",
        "relevance": 4.8,
        "price": 27.25,
        "age": 3,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/mortalKombatUltimate.jpg",
        "name": "MORTAL KOMBAT ULTIMATE",
        "relevance": 4.5,
        "price": 30.74,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/overCookedAllYouCanEat.jpg",
        "name": "OVERCOOKED! All you can eat",
        "relevance": 4.4,
        "price": 26.39,
        "age": 3,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/callOfDuttyVanguard.jpg",
        "name": "CALL OF DUTTY: Vanguard",
        "relevance": 4.3,
        "price": 80.92,
        "age": 18,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/NBA2K21.jpg",
        "name": "NBA 2K 21",
        "relevance": 4.4,
        "price": 40.36,
        "age": 3,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/atari50.jpg",
        "name": "ATARI 50",
        "relevance": 4.8,
        "price": 40.11,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/ninjaTurtles.jpg",
        "name": "Teenage Mutant Ninja Turtles: The Cowabunga",
        "relevance": 4.7,
        "price": 40.33,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/asterixAndObelix.jpg",
        "name": "Asterix & Obelix Slap Them All !",
        "relevance": 4.6,
        "price": 29.84,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/cavemanNinja.jpg",
        "name": "JOE and MAC Caveman Ninja",
        "relevance": 4.1,
        "price": 40.11,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/kaoTheKangaroo.jpg",
        "name": "Kao The Kangaroo",
        "relevance": 4.3,
        "price": 40.11,
        "age": 7,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/puyoPuyoTetris.jpg",
        "name": "Puyo Puyo Tetris 2",
        "relevance": 4.6,
        "price": 39.83,
        "age": 3,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/destructionAllStars.jpg",
        "name": "Destruction Allstars",
        "relevance": 3.7,
        "price": 19.84,
        "age": 12,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/monsterTruck.jpg",
        "name": "Monster Truck Championship",
        "relevance": 4.0,
        "price": 19.99,
        "age": 3,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/edgeOfEternity.jpg",
        "name": "Edge of Eternity",
        "relevance": 4.5,
        "price": 38.52,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/w2c10.jpg",
        "name": "World Rally Championship 10",
        "relevance": 4.4,
        "price": 29.35,
        "age": 3,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/theDioFieldChronicle.jpg",
        "name": "The DioField Chronicle",
        "relevance": 4.4,
        "price": 35.03,
        "age": 16,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/inertialDrift.jpg",
        "name": "Inertial Drift Twilight Rivals Edition",
        "relevance": 4.7,
        "price": 29.85,
        "age": 3,
        "console": "Play Station 5"

    },
    {
        "image": "../assets/tacticOgreReborn.jpg",
        "name": "Tactics Ogre Reborn",
        "relevance": 4.7,
        "price": 53.26,
        "age": 12,
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


