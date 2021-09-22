const express = require('express');

// import apollo 

const { ApolloServer } = require('apollo-server-express');

// import schemas
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// create apollo server and pass in our schema data
const server = new ApolloServer({
    typeDefs,
    resolvers
});

async function startServer() {
    await server.start();
    server.applyMiddleware({ app })
}
startServer()
