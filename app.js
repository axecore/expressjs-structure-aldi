const express = require('express'),
      app = express(),
      port = 3000,
      bodyParser = require('body-parser')

// Route
const router = require('./router')

app.set('view engine', 'pug')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)
app.listen(port, () => console.log(`Aplikasi Berjalan pada http://localhost:${port}`))

// Node Express by aldi