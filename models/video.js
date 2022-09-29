const mongoose = require("mongoose")

const videoSchema = mongoose.Schema(
    {
        video: Array,
        date: {type: Date, default: Date.now()}
    }
)

module.exports = mongoose.model("Video", videoSchema)