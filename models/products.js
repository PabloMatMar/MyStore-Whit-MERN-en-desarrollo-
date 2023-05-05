const { url } = require('inspector');
const mongoose = require('../utils/db')

const objectSchema = mongoose.Schema({
    // https://stackoverflow.com/questions/57151028/how-to-fix-validationerror-users-validation-failed-name-path-name-is-requ
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    relevance: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: String,
        required: true
    },
    console: {
        type: String,
        required: true
    },
    exclusive: {
        type: Boolean,
        required: true
    },
    others: {
        type: Array,
    },
    developers: {
        type: Array,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    trailer: {
        type: String,
        required: true,
        unique: true
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Providers',
        required: true
    }
})


const Products = mongoose.model('products', objectSchema);

module.exports = Products;