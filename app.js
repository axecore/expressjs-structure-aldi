const express = require('express'),
      app = express(),
      port = 3000,
      bodyParser = require('body-parser')
      handlebars = require('express-handlebars')

// Route
const router = require('./router')

// View engine
app.engine(
    "hbs",
    handlebars({
      defaultLayout: "master",
      extname: ".hbs",
    })
  );  
app.set("view engine", "hbs");
  
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router)
app.listen(port, () => console.log(`Aplikasi Berjalan pada http://localhost:${port}`))

// Node Express API by aldi