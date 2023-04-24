const express = require('express')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.json())

app.get('/',(req,res)=>{
    res.send('api on')
})
app.post('/post',(req,res)=>{
    const {a,b} = req.body
    console.log(a,b)
    res.send({result:(a+b)})
})
app.get('/get',(req,res)=>{
    res.send({msg:'pegou nada'})
})

app.listen(3000,()=>{
    console.log('escutando na porta 3000')
})



