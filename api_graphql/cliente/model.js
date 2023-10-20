 // models.js
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: String,
    telefono: String,
});

const ClienteModel = mongoose.model('Cliente', clienteSchema);

module.exports = {
    ClienteModel,
};