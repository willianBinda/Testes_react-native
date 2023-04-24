const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')

const router = express.Router()

router.post('/signup',async(req,res)=>{ //aqui na rota signup esta fazendo todo o resto. Não entendi direito
    const {email,password} = req.body   //aqui esta pegando la do postman
    try{
        const user = new User({email,password}) //cria um novo usuario
        await user.save()   //salva o novo usuario

        const token = jwt.sign({userId:user._id},"MY_SECRET_KEY")   //codifica o usuario cadastrado
        res.send({token}) //e se for cadastrado com sucesso mostra o token codificado e nao mais o dados no postman
    }catch(e){
        res.status(422).send(e.message)
    }
})

router.post('/signin', async(req,res)=>{
    const {email, password} = req.body

    if(!email || !password){
        return res.status(422).send({error:'Must provide email and password!'})
    }

    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error:'Email not found'})
    }

    try{
        await user.comparePassword(password)
        const token = jwt.sign({userId:user._id},"MY_SECRET_KEY",)
        res.send({token})
    }catch(err){
        return res.status(422).send({error:'Invalid email or password'})
    }

})

module.exports = router