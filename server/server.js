const express = require('express');

// auth 
// const { authMiddleware } = require('./utils/auth');

// import apollo 


const { ApolloServer } = require('apollo-server-express');

// import schemas
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection.js');
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
startServer(); // start apollo server boiklopj

console.log(process.env.MONGODB_URI);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // Serve up static assets

// add to heroku buildpack
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`api server running on port ${PORT}! `);
    })
})

// heroku i hate u from imjord