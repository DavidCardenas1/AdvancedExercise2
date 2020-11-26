
const {  getMovieEvaluation, addMovieWatched,
     evaluateMovie,getToWatchList,addToWatchList,getMoviesWatched,
     removeFromToWatchList} = require("./movieResolvers");
const {  login, register } = require("./usersResolvers")
const createReport = require('./reportResolver')


const resolvers = {
    Query: {
        login,
        getMovieEvaluation,
        getToWatchList,
        getMoviesWatched,
        createReport
    },
    Mutation: {
        register,
        addMovieWatched,
        addToWatchList,
        evaluateMovie,
        removeFromToWatchList
    }
}
module.exports = resolvers;
// https://www.omdbapi.com/?t=titanic&apikey=a8dc94af