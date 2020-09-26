const mongoose = require('mongoose')

const SessionSchema = new mongoose.Schema({
    session: String,
    user: String
});

module.exports = mongoose.model('Session', SessionSchema);