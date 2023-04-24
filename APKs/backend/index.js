const express = require('express')
const body_parser = require('body-parser')
const router = require('./router/index')
const cors = require('cors')
const app = express();

app.use(body_parser.json())
app.use(router)

app.get('/',(req, res) => {
    // res.send("API ON");
    console.log('aquiii')
    res.send(JSON.stringify({value:"aquiii"}))
});


app.listen(3000, () => {
    console.log('Escutando na porta:', 3000)
})