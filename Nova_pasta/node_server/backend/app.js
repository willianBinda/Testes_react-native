const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000
const HOST = "0.0.0.0"

app.use(bodyParser.json())

mongoose.set("strictQuery", false);//precisa deixar isso para usar o mongo

mongoose.connect('mongodb://root@179.124.146.18:27017/DBDB', {
    authSource: 'admin',
    user: 'root',
    pass: 'adminmongo'
})
    .then(() => {
        const port = 3000;
        app.get('/', (req, res) => {
            console.log('aabbb')
            res.send('hello worldddd')
        })
        app.listen(port, HOST, () => {
            console.log('Escutando na porta:', port)
        })
        console.log('Conectado ao banco mongoDB');
    })
    .catch((e) => console.log('Falha na conexão com o mongoDB'));

mongoose.connection.on('connected', () => {
    console.log('Mongoose conectado ao db')
})

mongoose.connection.on('error', (err) => {
    console.log('Erro ao conectar mongoose com banco')
})

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose desconectado')
})



// app.listen(PORT,HOST)
