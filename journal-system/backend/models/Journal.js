const mongoose = require("mongoose")

const journalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    ambience: String,
    text: String,
    emotion: String,
    keywords: [String],
    summary: String
})

module.exports = mongoose.model("Journal", journalSchema);