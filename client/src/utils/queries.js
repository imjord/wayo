import { gql } from '@apollo/client';


export const QUERY_USER = gql `
query user($username: String!) {
    user(username: $username) {
        _id
        username
        email
    }
} `;

// querys for when logged in will be used on products page to show orders.
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
            image
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

export const QUERY_ALL_PRODUCTS = gql `
    {
        products {
            _id
            name
            description
            price
            quantity
        }
    }
`

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
`;

export const QUERY_CHECKOUT = gql `
    query Checkout($products:[ID]!) {
        checkout(products: $products) {
            session
        }
    }
`;