const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const character = require('./src/controllers/characterController')
const country = require('./countryController')
const items = require('./itemsController')
const guild = require('./guildController')

const http = require('http')
const app = express();
const port = process.env.PORT || 5001


connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});



app.get('/', (req, res) => {
});

const characterRoutes = require("./src/routes/characterRoutes")
const itemRoutes = require("./src/routes/itemRoutes")
const guildRoutes = require("./src/routes/guildRoutes")
const countryRoutes = require("./src/routes/countryRoutes")

app.use('api/characters', characterRoutes)
app.use('api/items', itemRoutes)
app.use('api/guilds', guildRoutes)
app.use('api/countries', countryRoutes)

app.listen(port,() => {
  console.log('Server is listening on port ${port}')
})