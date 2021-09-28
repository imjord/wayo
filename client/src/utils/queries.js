import { gql } from '@apollo/client';


export const QUERY_USER = gql `
query user($username: String!) {
    user(username: $username) {
        _id
        username
        email
    }
} `;


export const QUERY_ME = gql `
{
    me{
        _id
        username
        email
        items{
            _id
            name
            price
            description
            itemimage
        }
        orderdetails{
            _id
            purchasedby {
                _id
                username
            }
        }

    }
}` 

export const QUERY_PRODUCTS = gql `
    {
        products {
            _id
            name
            price
            description
            image
        }
    }
`