const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({
    likes:
        {
            type: mongoose.Schema.ObjectId,
            ref: "Car"
        }
})


module.exports = mongoose.model("Like", likeSchema)