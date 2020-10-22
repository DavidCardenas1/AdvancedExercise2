const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose');
const express = require("express");
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const config = require('./config')







const startServer = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    server.applyMiddleware({ app });

    try {

        await mongoose.connect(config.db, { useCreateIndex: true,useNewUrlParser: true, useUnifiedTopology: true });
    } catch (error) {
        console.log("error");
    }

    app.listen(config.PORT, () => {
        console.log(server.graphqlPath);
    });
}
startServer()