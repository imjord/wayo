import React, { useEffect, useState } from "react";
import { useQuery } from '@apollo/react-hooks';
import { Link, useParams } from "react-router-dom";
import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY, ADD_TO_CART, UPDATE_PRODUCTS, } from "../utils/action";
import giphy from '../assets/giphy.gif';

import { Grid, Card, makeStyles, createStyles, Button } from '@material-ui/core';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const useStyles = makeStyles(() => 
    createStyles({
        itemPageContainer: {

        },
        cardPrice: {

        }
    })
);

// function for cart products
function ItemPage() {
    const classes = useStyles();

    const [state, dispatch] = useStoreContext();
    const { id } = useParams();
    const [currentProducts, setCurrentProducts] = useState({});
    const { loading, data } = useQuery(QUERY_PRODUCTS);

    const { products, cart } = state;

    // react effect function
    useEffect(() => {
        if (products.length) {

            setCurrentProducts(products.find(product => product._id === id));
        } 
        else if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });

            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        }
        // loading cache idb helper
        else if (!loading) {
            idbPromise('products', 'get').then((indxProducts) => {
                dispatch({
                type: UPDATE_PRODUCTS,
                products: indxProducts
                });
            });
        }
    }, [products, data, loading, dispatch, id]);

    
    // remove from cart function
    const removeFromCart = () => {
        dispatch({
        type: REMOVE_FROM_CART,
        _id: currentProducts._id
        });

        idbPromise('cart', 'delete', { ...currentProducts });
    };

    // add to cart function
    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === id)
        if (itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: id,
                purchaseProducts: parseInt(itemInCart.purchaseProducts) + 1
            });
        idbPromise('cart', 'put', {
            ...itemInCart,
            purchaseProducts: parseInt(itemInCart.purchaseProducts) + 1
        });
        } else {
            dispatch({
                type: ADD_TO_CART,
                product: { ...currentProducts, purchaseProducts: 1 }
            });
            idbPromise('cart', 'put', { ...currentProducts, purchaseProducts: 1 });

        }
    };

  return (
    <>
      {currentProducts ? (
        <Grid
            className={classes.itemPageContainer}
        >
            <Card 
                JustifyContent="Center"

                >
            <Link to="/products">
                <ArrowBackIosNewIcon />
            </Link>
            <h2>{currentProducts.name}</h2>
            <p>
                {currentProducts.description}
            </p>

            <p>
                <h3 className={classes.cardPrice}>Price:</h3>
                ${currentProducts.price}
                {" "}
                <button onClick={addToCart}>
                Add to Bag
                </button>
                <button 
                disabled={!cart.find(product => product._id === currentProducts._id)} 
                onClick={removeFromCart}
                >
                Remove from Bag
                </button>
            </p>

            <img
                src={`/images/${currentProducts.image}`}
                alt={currentProducts.name}
            />
            </Card>
        </Grid>
      ) : null}
      {
        loading ? <img src={giphy} alt="loading" /> : null
      }
    </>
  );
};

export default ItemPage;
