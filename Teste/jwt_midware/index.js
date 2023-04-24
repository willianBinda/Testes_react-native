const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())

const User = require('./model/User')

//public route
app.get('/',middleware1,(req,res)=>{
    res.status(200).json({msg:'Bem vindo para api'})
})





//private route

app.get("/user/:id",checkToken,async(req,res)=>{
    const id = req.params.id
    //vai pegar os dados sem a password
    const user = await User.findById(id,'-password') 
    

    if(!user){
        return res.status(404).json({msg:'Usuario não encontrado'})
    }

    res.status(200).json({ user })

})

//middleware
function middleware1(req,res,next){
    const { authorization } = req.headers

    if(!authorization){
        return res.status(401).send({error:"O usuário precisa estar logado!"})
    }

    const token = authorization.replace('Bearer ', '')
    
    jwt.verify(token, "MY_SECRET_KEY", async (err,payload)=>{
        
        if(err){
            res.status(401).send({error:"O usuário precisa estar logado"})
        }

        const {userId} = payload

        if (!userId) {
            res.status(401).send("O usuário precisa estar logado");
        }

        // const user = await User.findById(userId)
        req.user = userId
        next()
    })
}

//next = se der tudo certo continua o programa
function checkToken(req,res,next){


    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token){
        //401 = acesso negado no sistema
        return res.status(401).json({msg:"Acesso negado!"})
    }

    try {
        
        const secret = "MY_SECRET_KEY"
        jwt.verify(token,secret)

        next()

    } catch (error) {
        res.status(400).json({msg:"token invalido"})
    }

}




app.post('/auth/register',async(req,res)=>{

    const {name,email,password,confirmpassword} = req.body

    if(!name){
        //erro 422 = o sistema entende a req, porem os dados não estão corretos
        return res.status(422).json({msg:'O nome é ogrigatorio!'})
    }

    if(!email){
        //erro 422 = o sistema entende a req, porem os dados não estão corretos
        return res.status(422).json({msg:'O email é ogrigatorio!'})
    }

    if(!password){
        //erro 422 = o sistema entende a req, porem os dados não estão corretos
        return res.status(422).json({msg:'O password é ogrigatorio!'})
    }
    if(password !== confirmpassword){
        return res.status(422).json({msg:'As senhas não conferem!'})
    }
    
    const userExist = await User.findOne({email:email})
    if(userExist){
        return res.status(422).json({msg:'Email já em uso, escolha outro!'}) 
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password,salt)

    const user = new User({
        name,
        email,
        password:passwordHash,
    })

    try{
        await user.save()
        //201 = algo foi criado no banco
        res.status(201).json({msg:'Usuario criado com sucesso'})


    }catch(e){
        console.log(e)
        //erro 500 = erro de servidor
        res.status(500).json({msg:'Erro ao salvar no banco'})
    }

})

app.post('/auth/login', async(req,res)=>{
    const {email,password} = req.body

    if(!email){
        return res.status(422).json({msg:'O email é ogrigatorio!'})
    }

    if(!password){
        return res.status(422).json({msg:'A senha é ogrigatorio!'})
    }
    const user = await User.findOne({email:email})
    if(!user){
        return res.status(404).json({msg:'Usuario não encontrado'}) 
    }

    const checkPassword = await bcrypt.compare(password,user.password)
    if(!checkPassword){
        return res.status(422).json({msg:'Senha invalida'}) 
    }

    try{
        const secret = 'MY_SECRET_KEY'
        const token = jwt.sign({id:user._id},secret)
        //200 = login com sucesso
        res.status(200).json({msg:'Autenticação realizada com sucesso',token})
    }catch(e){
        console.log(e)
        res.status(500).json({msg:'Ocorreu um erro no servidor, tente novamente mais tarde'})
    }
})



mongoose.connect('mongodb://127.0.0.1:27017/jwt_middleware')
.then(()=>{
    app.listen(9000)
    console.log('Conectado no banco de dados')
}
)
.catch((e)=>console.log('Falha na conexão co o banco'))