const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types
const playlistSchema = mongoose.Schema({
    name: {
        type: String,
    },
    artist: {
        type: String,
    },
    cover_image: {
        type: String
    },
    songs: [{
        song_name: {
            type: String
        },
        audio: {
            type: String
        },
        totalTime:{
            type:String
        }
    }]
})

mongoose.model('PLAYLIST', playlistSchema);