
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
        "id": 0,
        "name": "gato",
        "relevance": 132130,
        "price": 1431233
    },
    {
        "id": 13123,
        "name": "gate",
        "relevance": 103213,
        "price": 123143
    },
    {
        "id": 32132,
        "name": "gatu",
        "relevance": 1312310,
        "price": 431233
    },
    {
        "id": 3321312,
        "name": "gatico",
        "relevance": 321313120,
        "price": 4312331231
    },
    {
        "id": 45463,
        "name": "gatete",
        "relevance": 156640,
        "price": 454353
    },
    {
        "id": 2345,
        "name": "muerdeplantas",
        "relevance": 1345340,
        "price": 476473
    },
    {
        "id": 2345235,
        "name": "gatosqui",
        "relevance": 5332510,
        "price": 4547543
    },
    {
        "id": 53223,
        "name": "pecora",
        "relevance": 1432430,
        "price": 1321241133
    },
    {
        "id": 7123123,
        "name": "minino",
        "relevance": 12154350,
        "price": 43123212
    },
    {
        "id": 436545748,
        "name": "doraemon",
        "relevance": 165475230,
        "price": 41248796873
    },
    {
        "id": 2342349,
        "name": "gatoneitor",
        "relevance": 2342313244230,
        "price": 523523543
    },
    {
        "id": 42342310,
        "name": "gatomico",
        "relevance": 423342310,
        "price": 23234234434322343
    },
    {
        "id": 14324231,
        "name": "gatastrofico",
        "relevance": 43242310,
        "price": 42342343
    },
    {
        "id": 242342342,
        "name": "gatete- tetete",
        "relevance": 4234532765710,
        "price": 234234434233
    },
    {
        "id": 43243227,
        "name": "gatiño",
        "relevance": 143243232130,
        "price": 432423443
    },
    {
        "id": 03213,
        "name": "gata",
        "relevance": 13210,
        "price": 4123123
    },
    {
        "id": 032,
        "name": "exnovia",
        "relevance": 10,
        "price": 43213
    },
    {
        "id": 03213,
        "name": "gateria",
        "relevance": 10,
        "price": 43321312
    },
    {
        "id": 032131,
        "name": "gatopulpo",
        "relevance": 423234143240,
        "price": 43242343
    },
    {
        "id": 4324230,
        "name": "gatesco",
        "relevance": 14234230,
        "price": 43232443
    },
    {
        "id": 432420,
        "name": "gatatonico",
        "relevance": 43243242310,
        "price": 44324323
    },
    {
        "id": 4324230,
        "name": "gaterico",
        "relevance": 143242340,
        "price": 4324324243
    },
    {
        "id": 42343240,
        "name": "supercalifragatilistico",
        "relevance": 432432410,
        "price": 432432443
    },
    {
        "id": 43243220,
        "name": "gaton",
        "relevance": 14324230,
        "price": 344324243
    },
    {
        "id": 4324230,
        "name": "gatesco",
        "relevance": 14324230,
        "price": 12365687843
    },
    {
        "id": 432420,
        "name": "gatatonicos",
        "relevance": 87187680,
        "price": 4876863
    },
    {
        "id": 43424340,
        "name": "gatumino",
        "relevance": 8768718768670,
        "price": 87678648768673
    },
    {
        "id": 032423,
        "name": "gatito",
        "relevance": 13242340,
        "price": 543543
    },
    {
        "id": 65345450,
        "name": "gatita",
        "relevance": 1234230,
        "price": 432675683
    },
    {
        "id": 58375480,
        "name": "gatooooo",
        "relevance": 185786420,
        "price": 344231453
    },
    {
        "id": 0321312,
        "name": "ps ps ps",
        "relevance": 13213120,
        "price": 43123123
    },
    {
        "id": 0,
        "name": "gatulento",
        "relevance": 11231230,
        "price": 432143353
    },
    {
        "id": 43243420,
        "name": "gatodico",
        "relevance": 14324320,
        "price": 4342344324323
    },
    {
        "id": 4324230,
        "name": "gatuerto",
        "relevance": 432432410,
        "price": 43243243
    },
    {
        "id": 4324320,
        "name": "gateto",
        "relevance": 43243210,
        "price": 43243243
    },
    {
        "id": 432540,
        "name": "gatinosicolino",
        "relevance": 32432410,
        "price": 233424432433
    },
    {
        "id": 4324320,
        "name": "gatolico",
        "relevance": 43243210,
        "price": 43243243
    },
    {
        "id": 4234320,
        "name": "gatonimio",
        "relevance": 14324320,
        "price": 43243243
    },
    {
        "id": 123123032323,
        "name": "gatonimo",
        "relevance": 13213120,
        "price": 32131243
    },
    {
        "id": 3213120312321312,
        "name": "gatar",
        "relevance": 344656810,
        "price": 433443788
    },
    {
        "id": 54353460,
        "name": "gatureal",
        "relevance": 6537610,
        "price": 86588653
    },
    {
        "id": 0325325,
        "name": "agatado",
        "relevance": 532510,
        "price": 5252343
    },
    {
        "id": 53235230,
        "name": "engatado",
        "relevance": 4235410,
        "price": 4432323
    },
    {
        "id": 423420,
        "name": "whiskas",
        "relevance": 4234210,
        "price": 4234233
    },
    {
        "id": 23320,
        "name": "mininolido",
        "relevance": 154350,
        "price": 453453
    },
    {
        "id": 54350,
        "name": "jodercuantogato",
        "relevance": 345310,
        "price": 45345343
    },
    {
        "id": 5345340,
        "name": "otrogato",
        "relevance": 54353410,
        "price": 54353443
    },
    {
        "id": 0534534,
        "name": "gatuerto",
        "relevance": 53454310,
        "price": 45345433
    },
    {
        "id": 53450,
        "name": "gatoxico",
        "relevance": 53453410,
        "price": 4453533
    },
    {
        "id": 54305345,
        "name": "gatamentirosa",
        "relevance": 543515435340,
        "price": 54353443
    },
    {
        "id": 53405435,
        "name": "gatiña",
        "relevance": 5433410543534,
        "price": 54353443
    },
    {
        "id": 5435340,
        "name": "gatoriconolicosito",
        "relevance": 5435341543540,
        "price": 45643343
    },
    {
        "id": 5435340,
        "name": "gatouerda",
        "relevance": 53453410,
        "price": 534534453453
    },
    {
        "id": 5435340,
        "name": "musu",
        "relevance": 53453410,
        "price": 5435455343
    },
    {
        "id": 535230,
        "name": "gatuerco",
        "relevance": 53253210,
        "price": 3255324654463
    },
    {
        "id": 65650,
        "name": "gatorico",
        "relevance": 65410,
        "price": 6546443
    },
    {
        "id": 5435340,
        "name": "gatuntao",
        "relevance": 52353210,
        "price": 7657433223
    },
    {
        "id": 532570,
        "name": "gatogatogatoooo",
        "relevance": 5231250,
        "price": 2543523
    },
    {
        "id": 0542345,
        "name": "gaterco",
        "relevance": 1324230,
        "price": 465463
    },
    {
        "id": 532530,
        "name": "gaturra",
        "relevance": 532510,
        "price": 43789876
    },
    {
        "id": 6346340,
        "name": "gatenselmo",
        "relevance": 64363410,
        "price": 464363
    },
    {
        "id": 6433460,
        "name": "gatipcio",
        "relevance": 1643340,
        "price": 5346343
    },
    {
        "id": 532650,
        "name": "gatrextaterrestre",
        "relevance": 25353210,
        "price": 4235323
    },
    {
        "id": 0364,
        "name": "gatomicroniano",
        "relevance": 154366470,
        "price": 4534543
    }


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


