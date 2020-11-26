const { gql } = require('apollo-server-express')

 const typeDefs = gql`
    type User{
        name:String,
        email:String,
        password:String
    }

    type Movie{
        movieId:String,
        email:String,
        evaluation:String        
    }
    type UserHistory{
        name:String,
        email:String,
        moviesWatched:[Movie]
    }
    type Report{
        path:String
    }

    # example out
    type Query{
        
        login(email:String!,password:String!):User,        
        getMovieEvaluation(movieId:String!):Movie,
        getToWatchList(email:String):[Movie],
        getMoviesWatched(email:String):[Movie],
        createReport(email:String!):Report
    }
    

    type Mutation{
        register(name: String!,email:String!,password:String!,password2:String!):User,        
        addMovieWatched(email:String!,movieId:String!):Movie,
        addToWatchList(email:String,movieId:String):Movie,
        evaluateMovie(email:String!,movieId:String!,evaluation:Float!):Movie,
        removeFromToWatchList(email:String):Movie

    }
`;
module.exports=typeDefs;