const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()
 
 
routes.post('/', function(req, res){
    controller.agregarCliente( req.body )
        .then((data) => { 
            response.success(req, res, data, 201);
        })
        .catch((error) => response.error(req, res, error, 400));
});  

routes.get('/', function(req, res){
    const filtro = req.body || null
    controller.obtenerCliente( filtro )
        .then( (data) => response.success(req, res, data, 200) )
        .catch( (error) => response.error(req, res, error, 400) )
})  

module.exports = routes

