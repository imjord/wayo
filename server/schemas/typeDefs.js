// import the gql tagged template function c
const { gql } = require('apollo-server-express');




// our type defs 

const typeDefs = gql`
type Query {
    me: User
    users: [User]
    user(username: String!): User

}

type User{
    _id: ID
    username: String
    email: String  
    password: String 

}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    

}
type Auth {
    token: ID!
    user: User
}
`;




module.exports = typeDefs; 
