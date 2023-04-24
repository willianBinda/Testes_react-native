require('./models/User')
require('./models/Track')
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth')

const app = express();

app.use(bodyParser.json())  //esse precisa estar acima da authRoutes
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://admin:123@cluster1.iwxkchb.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoUri)

mongoose.connection.on('connected',()=>{    //faz a conexão com o banco
    console.log('connected to mongo instance')
})
mongoose.connection.on('error',(err)=>{ //caso não funcionou ele dispara esse erro
    console.error('error to connecting to mongo',err) 
})


app.get('/', requireAuth,(req,res)=>{    //faz uma postagem na web no localhost 3000
    res.send(`Your email: ${req.user.email}`);
})

app.listen(3000,()=>{
    console.log('Listening on port 3000');
});