
import React, { useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { useLazyQuery } from "@apollo/react-hooks";

import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/action";

import { useStoreContext } from '../../utils/GlobalState';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';

import {
    makeStyles,
    createStyles,
    Button
} from "@material-ui/core";

import './Cart.css';

// material ui styling
const useStyles = makeStyles((theme) => 
    createStyles({
        linkButton: {}
    })
);

const stripePromise = loadStripe('stripe_testtest_jksdfklsj');


const Cart = () => {
    const classes = useStyles();

    const [state, dispatch] = useStoreContext();
    const [Checkout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    // enter stripe redirect test session
    useEffect(() => {
        if(data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session })
            })
        }
    }, [data]);
    
    useEffect(() => {
        console.log(state.cart.length);
        async function getCart() {
            const cart = await idbPromise('cart', 'getCart');
            console.log("cart", cart);
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart]});
        };

        if (state.cart.length === 0) {
            console.log("this works");
            getCart();
        }
    }, [state.cart.length, dispatch]);


    // calculate total function
    function cartTotal() {
        let sum = 0;
        state.cart.forEach(item => {
            sum += item.price * item.purchaseProducts;
        });
        return sum.toFixed(2);
    }

    // checkout submit function
    function submitCheckout() {
        const productIds = [];

        state.cart.forEach((item) => {
            for (let i = 0; i < item.purchaseProducts; i++) {
                productIds.push(item._id);
            }
        });

        Checkout({
            variables: {products: productIds}
        });
    }

    console.log('item', state)
    return (
        <div>
            <h2>Cart</h2>
            {state?.cart.length ? (
                <div>
                    {state?.cart.map(item => (
                        <CartItem key={item._id} item={item} />
                    ))}

                    <div className="calculations">
                        <h4>Total: ${cartTotal()}</h4>

                        {
                            Auth.loggedIn() ?
                            <Button onClick={submitCheckout}>
                                Checkout.
                            </Button>
                                :
                                <span>(log in to continue)</span>
                        }
                    </div>
                </div>
            ) : (
                <h3>
                No items in your bag.
                </h3>
            )}
        </div>
    )
    
};

export default Cart;