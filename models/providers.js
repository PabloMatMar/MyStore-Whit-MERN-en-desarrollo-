const mongoose = require('../utils/db');

const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true
    },
    CIF: { 
        type: String, 
        required: true,
        unique: true
    },
    address: { 
        type: String, 
        required: true 
    }
};

const providerSchema = mongoose.Schema(objectSchema);

const Providers = mongoose.model('Providers', providerSchema);

module.exports = Providers;