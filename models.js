const mongoose = require('mongoose');
const { StringDecoder } = require('string_decoder');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Needed"]
    },
    author: {
        type: String,
        required: [true, "Needed"]
    },
    post:{
        type: String,
        required: [true, "Needed"]
    },
    time:{
        type:Date,
        default:Date.now
    }

})

model = new mongoose.model("PostDetails", postSchema)

module.exports = model;