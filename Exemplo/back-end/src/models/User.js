const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique:true, // não pode haver emails iguais caso tenha vai retornar uma mensagem de erro
        required:true   //se não tiver um email será invalido
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre('save', function(next){
    const user = this
    if(!user.isModified('password')){
        return next()
    }

    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err)
        }
        bcrypt.hash(user.password, salt, (err,hash)=>{
            if(err){
                return next(err)
            }
            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function(candidatePassord){
    const user = this
    return new Promise((resolv,reject)=>{
        bcrypt.compare(candidatePassord,user.password,(err,isMatch)=>{
            if(err){
                return reject(err)
            }

            if(!isMatch){
                return reject(false)
            }

            resolv(true)
        })
    })
}

mongoose.model('User',userSchema)