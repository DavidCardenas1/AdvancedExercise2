const mongoose = require('mongoose');

const UserMovie = mongoose.model('UserMovies', {
    email: { type: String, lowercase: true, required: true },
    movieName: { type: String, lowercase: true, required: true },
    evaluation: Number
});

module.exports = UserMovie;