const { gql } = require('apollo-server-express')

 const typeDefs = gql`
    type User{
        name:String,
        email:String,
        password:String
    }
    type Movie{
        movieName:String
        genre:String,
        evaluation:Float,
        productionCompany:String

    }
    type MovieWatched{
        movieName:String,
        email:String,
        evaluation:Float
    }
    type UserHistory{
        name:String,
        email:String,
        moviesWatched:[MovieWatched]
    }

    type Query{
        allUsers:[User]
        Login(email:String!,password:String!):User,
        userHistory(email:String!):UserHistory,
        findMovie(movieName:String!):Movie
        allMovies:[Movie]
    }

    type Mutation{
        createUser(name: String!,email:String!,password:String!,password2:String!):User,
        addMovie(movieName:String!,genre:String,productionCompany:String):Movie,
        movieWatched(email:String!,movieName:String!):MovieWatched,
        evaluateMovie(email:String!,movieName:String!,evaluation:Float!):MovieWatched

    }
`;
module.exports=typeDefs;