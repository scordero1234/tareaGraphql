const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const { ClienteModel } = require('./cliente/model');
  

let schema = buildSchema(`
    type Cliente {
        _id:ID!
        id: Int
        nombre: String
        telefono: String
    }
    type Query {
        clientes: [Cliente]
        cliente(id: Int): Cliente
    }
    type Mutation {
        addCliente(nombre: String, telefono: String): Cliente
    }
`)

// ...


let root = {
    clientes: () => {
        return ClienteModel.find();
    },
    cliente: (data) => {
        return ClienteModel.findById(data.id);
    },
    addCliente: (data) => {
        const newCliente = new ClienteModel({ 
            id: data.id,
            nombre: data.nombre,
            telefono: data.telefono,
        });

        return newCliente.save();
    },
}; 

const config = require('./config') 
const db = require('./db')

db( config.DB_URL )

let app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

let port = 4001
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})