const storage = require('./storage')

function agregarCliente( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}

function obtenerCliente( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}
 

module.exports = {
    agregarCliente,
    obtenerCliente 
}