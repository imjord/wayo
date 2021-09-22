// import the gql tagged template function c
const { gql } = require('apollo-server-express');




// our type defs 

const typeDefs = gql`
type Query {
    me: User
    users: [User]
    user(username: String!): User
    products: [Product]
    getCategory: [Category]
    userOrders: User


}

type User{
    _id: ID
    username: String
    email: String  
    password: String
    items: [Product]
    orderdetails: [Order!]!

}

type Category {
    _id: ID
    name: String!
    productlist: [Product]
}
type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    addProduct(name: String!, description: String!, category: String!, itemimage: String!, price: Int!): Product
    placeOrder(_id: ID!): Order
    

}
type Auth {
    token: ID!
    user: User
}

type Product {
    _id: ID
    name: String
    description: String
    price: Int
    itemimage: String
    category: Category


}
type Order {
    _id: ID
    purchasedby: User!
    
}

`;




module.exports = typeDefs; 
