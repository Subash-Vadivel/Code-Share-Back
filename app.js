const express = require('express');
const app = express();
const cors = require('cors');
const compilerroutes = require('./Routes/compileroute');
const bodyparser = require('body-parser');
app.use(
    cors({
      credentials: true,
      origin: ["https://quickquiz-bc991.web.app", "https://quickquiz-bc991.firebaseapp.com", "http://localhost:3000"],
    })
  );
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(bodyparser.json());
app.use(express.json());
app.use('/ourapi/compiler', compilerroutes);

module.exports = app;