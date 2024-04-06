const express = require("express");
const {mongourl} = require("./key")
const mongoose = require("mongoose");
const app = express()
const port = 5000
const cors = require('cors');

app.use(cors());

require("./models/model")

app.use(express.json())

app.use(require('./routes/auth'))

mongoose.connect(mongourl)

mongoose.connection.on('connected',  ()=> {
    console.log('MongoDB Connected');
})
mongoose.connection.on('error', () => {
    console.log("Not connected");
})

app.listen(port, () => {
    console.log(`Running at Port: ${port}`)
})