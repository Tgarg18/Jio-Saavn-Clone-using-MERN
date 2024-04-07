const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types
const playlistSchema = mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    user: {
        type: ObjectId,
        ref: "USER"
    }
})

mongoose.model('PLAYLIST', playlistSchema);