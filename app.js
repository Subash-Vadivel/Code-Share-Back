const express = require('express');
const app = express();
const compilerroutes = require('./Routes/compileroute');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(express.json());



app.use('/ourapi/compiler', compilerroutes);

module.exports = app;