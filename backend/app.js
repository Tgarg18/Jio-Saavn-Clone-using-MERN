require('dotenv').config()
const express = require("express");
const {mongourl} = require("./key")
const mongoose = require("mongoose");
const app = express()
const port = 5000
const cors = require('cors');
app.use(cors());

require("./models/model")
require('./models/playlist')

app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/playlists'))

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected',  ()=> {
    console.log('MongoDB Connected');
})
mongoose.connection.on('error', () => {
    console.log("Not connected");
})

app.listen(port, () => {
    console.log(`Running at Port: ${port}`)
})