const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { json } = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))
app.use(json())

app.listen(PORT, () => console.log(`Servidor escutando na porta ${PORT}`))
