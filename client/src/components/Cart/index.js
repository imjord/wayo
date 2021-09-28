import React, { useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { useLazyQuery } from "@apollo/react-hooks";

import { useStoreContext } from '../../utils/GlobalState';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';

import {
    makeStyles,
    createStyles,
    Button
} from "@material-ui/core";

import './Cart.css';

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

    useEffect(() => {
        if(data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session })
            })
        }
    }, [data]);
    
}

export default Cart;