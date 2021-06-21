const mongoose = require('mongoose')
const { Schema } = mongoose

const campaignSchema = new Schema({
    name: String,
    description: String,
    maxplayer: Number,
    author: String
})

const Campaign = mongoose.model('Campaign', campaignSchema)

module.exports = Campaign