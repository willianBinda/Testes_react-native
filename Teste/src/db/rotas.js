const express = require('express')
const mongoose = require('mongoose')
const Usuario = mongoose.model('usuarios')

const router = express.Router()

router.post('/cadastro', async(req,res)=>{
    const {usuario,senha} = req.body
    try {
        const user = new Usuario({usuario,senha})
        await user.save()
        console.log('usuario e senha cadastrados no back-end')
    } catch (e) {
        console.log('Erro ao salvar no banco mongo: ',e)
        res.status(422).send('Erro ao salvar no banco: ',e)
    }
})

router.get('/login',async (req,res)=>{
    const user = await Usuario.find({})
    res.json(user)
    console.log(user)
})  


module.exports = router