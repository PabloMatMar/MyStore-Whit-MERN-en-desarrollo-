const express = require('express');
// const path = require('path');
const cors = require('cors');
require('./utils/db');


const app = express();
const port = 5000;

//Importacion rutas

const getRoutes = require('./routes/productsRoutes')


// MIDDLEWARES
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(cors());

app.use('/products', getRoutes);




app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})