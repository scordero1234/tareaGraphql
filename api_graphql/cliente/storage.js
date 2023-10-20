const Model = require('./model') 
 
async function agregarCliente( dato ) {
    const resultado = await new Model( dato )
    return resultado.save()
}  


async function obtenerCliente( filtro ) {
    let mi_filtro = {}

    if (filtro.id != null) {
        mi_filtro = { id: filtro.id }
    }
    const resultado = await Model.find( mi_filtro )
    return resultado
}
 

module.exports = {
    agregar:agregarCliente,
    obtener:obtenerCliente 
}