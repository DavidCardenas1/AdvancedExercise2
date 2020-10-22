const mongoose = require('mongoose');

const Movies = mongoose.model('Movies', {
    movieName: { type: String, unique: true, lowercase: true, required:true },
    genre: String,
    productionCompany:String,
    evaluation:Number
});

module.exports=Movies;