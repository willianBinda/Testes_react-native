const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    usuario:{
        type:String,
        require:true
    },
    senha:{
        type:String,
        require:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})

userSchema.pre('save', function(next){
    const user = this

    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err)
        }
        bcrypt.hash(user.senha,salt,(err,hash)=>{
            if(err){
                return next(err)
            }
            user.senha = hash
            next()
        })

    })
})

mongoose.model('usuarios',userSchema)