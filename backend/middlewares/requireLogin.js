require('dotenv').config()
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const USER = mongoose.model("USER");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "You must be logged in" })
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "You must be logged in" })
        }
        const { _id } = payload;
        USER.findById(_id).then(userdata => {
            req.user = userdata
            next();
        })
    })
}