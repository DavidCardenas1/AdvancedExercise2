const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose');
const express = require("express");
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const config = require('./config')
const oracledb = require('oracledb');
const connection = require('./connectionDB')
// const configDB = require('./configOracle')

const dbConfig = require('./config/database');
// const defaultThreadPoolSize = 4;

// process.env.UV_THREADPOOL_SIZE = dbConfig.hrPool.poolMax + defaultThreadPoolSize;
const database = require('./services/database.js');


const startServer = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    server.applyMiddleware({ app });

    try {
        // let conn = await oracledb.getConnection({
        //     user: 'admin',
        //     password: 'admin',
        //     connectString: 'localhost:1521/ORCLCDB.localdomain'
        // });
        // console.log('Initializing database module');
        // conn = await  connection()
        // console.log(conn);
        // let result = await conn.execute("SELECT * FROM example");
        // await conn.close();
        // console.log(result);
        // await database.initialize();
        // await mongoose.connect(config.db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
    } catch (error) {
        console.log(error);
    }

    app.listen(config.PORT, () => {
        console.log(config.PORT, server.graphqlPath);
    });
}
startServer()