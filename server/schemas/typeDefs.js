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
    product(_id: ID!): Product


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
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProduct(name: String!, description: String!, itemimage: String!, price: Int!): Product
    placeOrder(products: [ID]!): Order
    

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
    image: String
    category: Category


}
type Order {
    _id: ID
    products: [Product]
    purchasedby: User!
    
}

`;




module.exports = typeDefs; 
