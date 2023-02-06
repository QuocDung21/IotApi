const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000
const dht = require('./src/routes/dht.route')
const { connect } = require('./src/connect/config.mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
connect

app.use('/dht', dht);
app.use('/', (req, res,) => {
    res.json("Hello World!")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))