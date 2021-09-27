import { gql } from '@apollo/client';

// mutation to login a user the variables should be the same that were used when adding a user 
export const LOGIN_USER = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password){
        token
        user{
            _id
            username
        }
    }
}`;



// mutation to add a user with a variable username and email and variable password. 
export const ADD_USER = gql `mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password){
        token
        user {
            _id
            username
        }
    }
}`;

// mutation to place an order the mutation will use the placeorder and grab products type ID
export const PLACE_ORDER = gql `mutation placeOrder($products: [ID]!){
    placeOrder(products: $products){
        purchasedBy
        products {
            _id
            name
            description
            price
            category{
                name
            }
        }
    }
}`