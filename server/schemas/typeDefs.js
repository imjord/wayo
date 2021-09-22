// import the gql tagged template function c
const { gql } = require('apollo-server-express');




// our type defs 

const typeDefs = gql`
type User{
    _id: ID
    username: String
    email: String   
    
}`
