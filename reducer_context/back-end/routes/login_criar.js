const express = require("express");
const bcrypt = require('bcrypt')
const fs = require("fs");
const router = express.Router();
const jwt = require('jsonwebtoken')

const dadosLocais = JSON.parse(fs.readFileSync("dados.json"));


//------------------------------------
router.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    res.status(422).send("Você deve definir email e senha");
  }

  const usuario = dadosLocais.find((user) => user.email === email);

  if (!usuario) {
    res.status(401).send("Email ou senha inválidos");
  }

  if (!bcrypt.compareSync(senha, usuario.hash)) {
    res.status(401).send("Email ou senha inválidos");
  }

  res.status(200).send({
    email: usuario.email,
    nome: usuario.nome,
    dados: usuario.dados,
    token: usuario.token,
  });
});
//deixar os status de erro e mensagens iguais para dificultar o trabalho para os hackers


//---------------------------------------
router.post("/criar", (req, res) => {
  const { nome, email, senha } = req.body;
  if (!email || !senha) {
    res.status(422).send("Você deve definir email e senha");
  } else if (
    dadosLocais.find(
      (usuario) => usuario.nome === nome || usuario.email === email
    )
  ) {
    res.status(401).send("Nome ou email de usuário já está em uso");
  } else {
    var dadosUsuario = {
      id: Math.floor(Math.random() * 9999999999),
      nome: nome,
      email: email,
      dados: {},
    };
    const token = jwt.sign({ id: dadosUsuario.id }, "KEY_SECRETA");
    dadosUsuario.token = token
    const salt = bcrypt.genSaltSync();
    dadosUsuario.hash = bcrypt.hashSync(senha, salt);
    dadosLocais.push(dadosUsuario);
    const dadosConvertidos = JSON.stringify(dadosLocais, null, 2);
    fs.writeFileSync("dados.json", dadosConvertidos);
    res.status(200).send('Usuario cadastrado com sucesso')
  }
});

module.exports = router;