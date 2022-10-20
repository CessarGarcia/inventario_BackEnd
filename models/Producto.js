const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    //nombre, categoria, proveedor, precio, items
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    proveedor: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    items: {
        type: Number,
        required: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);
