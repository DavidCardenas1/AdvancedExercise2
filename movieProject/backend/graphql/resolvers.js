
const { addMovie, allMovies, findMovie, movieWatched, evaluateMovie } = require("./movieResolvers");
const { allUsers, Login, createUser, userHistory } = require("./usersResolvers")
const createReport =require('./reportResolver')

const resolvers = {
    Query: {
        allUsers,
        Login,
        userHistory,
        findMovie,
        allMovies,
        createReport
    },
    Mutation: {
        createUser,
        addMovie,
        movieWatched,
        evaluateMovie
    }
}
module.exports = resolvers;
// https://www.omdbapi.com/?t=titanic&apikey=a8dc94af