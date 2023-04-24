const express = require('express');
const autenticacao = require('./middleware/autenticacao')
const app = express();
const router = require('./routes/login_criar')

// const dadosLocais = JSON.parse(fs.readFileSync('dados.json'))
app.use(express.json())//todos os dados que vierem em json serao convertidos para js    
app.use(router)//os arquivos desta pasta serao lidos abaixo
//req vem do cliente
//res vai da api para o cliente
app.get('/',autenticacao,(req,res)=>{
    //status 200 = ok
    res.status(200).send({
        nome:req.user.nome,
        email:req.user.email,
        dados:req.user.dados,
    });
});

// const usuarios = [
//     {nome:"a",idade:10},
//     {nome:"b",idade:2},
//     {nome:"c",idade:130},
//     {nome:"d",idade:17},
// ];

///usuarios/:parametro que sera colocado la pelo postman ou talvez no back-end
// app.get('/usuarios/:idade',(req,res)=>{
//     const {idade} = req.params; //em vez de colocar params.idade deixa como {idade}
//     const usuario = usuarios.find((usuarios)=>usuarios.idade ==idade)
//     usuario?res.status(200).send(usuario)
//     :res.status(404).send('Usuario nao encontrado')
// });


// app.post('/usuarios',(req,res)=>{
//     const {nome,email,saldo} = req.body
//     const dadosProcessados = {nome,email,saldo}
//     dadosLocais.push(dadosProcessados)
//     const dadosConvertidos = JSON.stringify(dadosLocais,null,2)//converte para json
//     fs.writeFile('dados.json',dadosConvertidos,()=>{
//         res.state(200).send('ok')
//     })

//     // console.log(req.query) //pega do postamen o que foi digitado na query como usuario/?idade=10
//     // const {idade} = req.query
//     // const usuario = usuarios.find((usuarios)=>usuarios.idade ==idade)
//     // usuario?res.status(200).send(usuario)
//     // :res.status(404).send('Usuario nao encontrado')
// })

app.listen(3000,()=>{
    console.log('COnectado na porta 3000');
});


