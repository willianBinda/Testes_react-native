const express = require('express')
const router = express.Router()

router.get('/teste',(req,res)=>{
    console.log('iiiiiiii')
    res.status(200).send({msg:"aaaaa"})
})

module.exports = router