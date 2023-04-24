const express = require('express')
const body_parser = require('body-parser')


const app = express()
app.use(body_parser.json())

app.post('/post',(req,res)=>{
    const {obj} = req.body
    const mudei = "klakalkalak"
    console.log(obj)
    res.status(200).send({obj:mudei})
})
app.get('/',(req,res)=>{
    res.send('api on')
})

app.listen(3000,()=>{
    console.log('Ecutando na porta 3000')
})