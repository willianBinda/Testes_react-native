require('./UserSchema')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const rotas = require('./rotas')

const app = express()

app.use(bodyParser.json())
app.use(rotas)

const mongoURI = 'mongodb://127.0.0.1:27017/Teste'
mongoose.connect(mongoURI)

mongoose.connection.on('connected',()=>console.log('Conectado com servidor do mongo'))
mongoose.connection.on('error',(err)=>console.log('Erro ao se conectar com mongo: ',err))

app.get('/cadastro',(req,res)=>res.send(`Usuario: ${req.body}`))
app.listen(3000,()=>console.log('Escutando na porta 3000'))