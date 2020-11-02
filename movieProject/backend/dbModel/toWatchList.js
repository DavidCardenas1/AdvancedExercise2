const mongoose = require('mongoose');

const UserMovie = mongoose.model('toWatchList', {
    email: { type: String, lowercase: true, required: true },
    movieName: { type: String, lowercase: true, required: true },
});

module.exports = UserMovie;