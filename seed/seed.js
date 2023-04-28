
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
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gato",
        "relevance": 132130,
        "price": 1431233
    },
    {
        "id": 13123,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaM4NopIq_YzUiaRlIu3lSeB813twUIIjOOY6brZCtkGxBWFj7U0vkms4OFwG5hKE-wQ&usqp=CAU",
        "name": "gate",
        "relevance": 103213,
        "price": 123143
    },
    {
        "id": 32132,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFFTLcDQYu-RLzk_Mgo1I1051tDO70bsHKSLzU5UwZUfpcVPhVIHY6eogZDP9RHTFp7hM&usqp=CAU",
        "name": "gatu",
        "relevance": 1312310,
        "price": 431233
    },
    {
        "id": 3321312,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-f7XnOLNFue0Wwv9NUtYFRjCcLnQGms1sQ&usqp=CAU",
        "name": "gatico",
        "relevance": 321313120,
        "price": 4312331231
    },
    {
        "id": 45463,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1uIHpFwbbKP76yHqHKzDdhD26sSIfvtgVQ&usqp=CAU",
        "name": "gatete",
        "relevance": 156640,
        "price": 454353
    },
    {
        "id": 2345,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5ba68vx3U7SjAZ5s2y0v7uqu6KcFu4AAxw&usqp=CAU",
        "name": "muerdeplantas",
        "relevance": 1345340,
        "price": 476473
    },
    {
        "id": 2345235,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbch3KsPANAudRtfdd-frroNSOs8Al0hbsyA&usqp=CAU",
        "name": "gatosqui",
        "relevance": 5332510,
        "price": 4547543
    },
    {
        "id": 53223,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69ywN3wLOncAp6xxB7ZSob8aScD5sPQntXg&usqp=CAU",
        "name": "pecora",
        "relevance": 1432430,
        "price": 1321241133
    },
    {
        "id": 7123123,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmy5HVAG0mVt0Ut1hQiYTsi_kuJ6dv9yGig&usqp=CAU",
        "name": "minino",
        "relevance": 12154350,
        "price": 43123212
    },
    {
        "id": 436545748,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbPq2CZ5k0cl1fPYstu6-o0BCi51X9BoItw&usqp=CAU",
        "name": "doraemon",
        "relevance": 165475230,
        "price": 41248796873
    },
    {
        "id": 2342349,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlLd1IBpSfU4anHmAI5ZnkXE_bJf08DzN6BA&usqp=CAU",
        "name": "gatoneitor",
        "relevance": 2342313244230,
        "price": 523523543
    },
    {
        "id": 42342310,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatomico",
        "relevance": 423342310,
        "price": 23234234434322343
    },
    {
        "id": 14324231,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatastrofico",
        "relevance": 43242310,
        "price": 42342343
    },
    {
        "id": 242342342,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatete- tetete",
        "relevance": 4234532765710,
        "price": 234234434233
    },
    {
        "id": 43243227,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatiño",
        "relevance": 143243232130,
        "price": 432423443
    },
    {
        "id": 03213,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gata",
        "relevance": 13210,
        "price": 4123123
    },
    {
        "id": 032,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "exnovia",
        "relevance": 10,
        "price": 43213
    },
    {
        "id": 03213454,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gateria",
        "relevance": 10,
        "price": 43321312
    },
    {
        "id": 032131,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatopulpo",
        "relevance": 423234143240,
        "price": 43242343
    },
    {
        "id": 4324230,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatesco",
        "relevance": 14234230,
        "price": 43232443
    },
    {
        "id": 432420,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatatonico",
        "relevance": 43243242310,
        "price": 44324323
    },
    {
        "id": 437242830,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gaterico",
        "relevance": 143242340,
        "price": 4324324243
    },
    {
        "id": 42343240,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "supercalifragatilistico",
        "relevance": 432432410,
        "price": 432432443
    },
    {
        "id": 43243220,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gaton",
        "relevance": 14324230,
        "price": 344324243
    },
    {
        "id": 413242830,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatesquico",
        "relevance": 14324230,
        "price": 12365687843
    },
    {
        "id": 43291420,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatatonicos",
        "relevance": 87187680,
        "price": 4876863
    },
    {
        "id": 43424340,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatumino",
        "relevance": 8768718768670,
        "price": 87678648768673
    },
    {
        "id": 032423,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatito",
        "relevance": 13242340,
        "price": 543543
    },
    {
        "id": 65345450,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatita",
        "relevance": 1234230,
        "price": 432675683
    },
    {
        "id": 58375480,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatooooo",
        "relevance": 185786420,
        "price": 344231453
    },
    {
        "id": 0321312,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "ps ps ps",
        "relevance": 13213120,
        "price": 43123123
    },
    {
        "id": 13804264586,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatulento",
        "relevance": 11231230,
        "price": 432143353
    },
    {
        "id": 43243420,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatodico",
        "relevance": 14324320,
        "price": 4342344324323
    },
    {
        "id": 4312423070,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gabituerto",
        "relevance": 432432410,
        "price": 43243243
    },
    {
        "id": 4324320,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gateto",
        "relevance": 43243210,
        "price": 43243243
    },
    {
        "id": 432540,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatinosicolino",
        "relevance": 32432410,
        "price": 233424432433
    },
    {
        "id": 42132438720,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatolico",
        "relevance": 43243210,
        "price": 43243243
    },
    {
        "id": 4234320,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatonimio",
        "relevance": 14324320,
        "price": 43243243
    },
    {
        "id": 123123032323,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatonimo",
        "relevance": 13213120,
        "price": 32131243
    },
    {
        "id": 3213120312321312,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatar",
        "relevance": 344656810,
        "price": 433443788
    },
    {
        "id": 54353460,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatureal",
        "relevance": 6537610,
        "price": 86588653
    },
    {
        "id": 0325325,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "agatado",
        "relevance": 532510,
        "price": 5252343
    },
    {
        "id": 53235230,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "engatado",
        "relevance": 4235410,
        "price": 4432323
    },
    {
        "id": 423420,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "whiskas",
        "relevance": 4234210,
        "price": 4234233
    },
    {
        "id": 23320,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "mininolido",
        "relevance": 154350,
        "price": 453453
    },
    {
        "id": 54350,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "jodercuantogato",
        "relevance": 345310,
        "price": 45345343
    },
    {
        "id": 5345340,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "otrogato",
        "relevance": 54353410,
        "price": 54353443
    },
    {
        "id": 0534534,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatuerto",
        "relevance": 53454310,
        "price": 45345433
    },
    {
        "id": 53450,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatoxico",
        "relevance": 53453410,
        "price": 4453533
    },
    {
        "id": 54305345,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatamentirosa",
        "relevance": 543515435340,
        "price": 54353443
    },
    {
        "id": 53405435,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatiña",
        "relevance": 5433410543534,
        "price": 54353443
    },
    {
        "id": 5435340,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatoriconolicosito",
        "relevance": 5435341543540,
        "price": 45643343
    },
    {
        "id": 543753401,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatouerda",
        "relevance": 53453410,
        "price": 534534453453
    },
    {
        "id": 5431534099,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "musu",
        "relevance": 53453410,
        "price": 5435455343
    },
    {
        "id": 535230,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatuerco",
        "relevance": 53253210,
        "price": 3255324654463
    },
    {
        "id": 65650,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatorico",
        "relevance": 65410,
        "price": 6546443
    },
    {
        "id": 5423573401,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatuntao",
        "relevance": 52353210,
        "price": 7657433223
    },
    {
        "id": 532570,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatogatogatoooo",
        "relevance": 5231250,
        "price": 2543523
    },
    {
        "id": 0542345,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gaterco",
        "relevance": 1324230,
        "price": 465463
    },
    {
        "id": 532530,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gaturra",
        "relevance": 532510,
        "price": 43789876
    },
    {
        "id": 6346340,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatenselmo",
        "relevance": 64363410,
        "price": 464363
    },
    {
        "id": 6433460,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatipcio",
        "relevance": 1643340,
        "price": 5346343
    },
    {
        "id": 532650,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
        "name": "gatrextaterrestre",
        "relevance": 25353210,
        "price": 4235323
    },
    {
        "id": 0364,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSfBzGy2wWugFEme09YyQyc9k1skEMNqRO3VEK-KAgrICQseJhpzgzSiml-Z0YzAfu9Hw&usqp=CAU",
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


