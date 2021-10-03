import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/action";
import { idbPromise } from "../../utils/helpers";
import './ProductItem.css';

import { Card, CardContent, createStyles, makeStyles, Grid, Button, CardActionArea } from '@material-ui/core';


const useStyles = makeStyles(() => 
    createStyles({

        pageCopntainer: {

        },
        gridContainer: {
            display: 'flex',
            maxWidth: "400px",
            maxHeight: "500px",
            margin: "0 auto",
    
        },
        productCard: {
            padding: "1",
            maxWidth: "40%",
            maxHeight: "35vh",
            justifyContent: "center",
            margin: "2%",
        },
        cardHeader: {
            fontSize: "10px",
        },
        cardContent: {

        },
        cardPrice: {
            justifyItems: "center",
        },
        cardMedia: {
            maxWidth: "100%",
            borderBottom: "1px solid"
        },
        cardAction: {
            textAlign: "center"
        },
    })
);

// function for individual item
function ProductItem(item) {

    const classes = useStyles();
    const [state, dispatch] = useStoreContext();

    const { _id, image, name, price, description
    } = item;

    // console.log("id", _id);

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
        dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: _id,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
        idbPromise('cart', 'put', {
            ...itemInCart,
            purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
        } else {
        dispatch({
            type: ADD_TO_CART,
            products: { ...item}
        });
        idbPromise('cart', 'put', { ...item});
        }
    }

    // Card for each product
    return (
        <div className={classes.pageContainer}>
            <Grid
            justifyContent="space-evenly"
            textAlign="center"
                className={classes.gridContainer}
                >   
                <Card 
                    className={classes.productCard}
                >
                    <CardActionArea
                        className={classes.cardAction}>
                        
                        <Link to={`/products/${_id}`}>
                            <img
                            className={classes.cardMedia}
                            alt={name}
                            src={`assets/images/${image}`}
                            /> 
                        </Link>
                        <CardContent>
                            <div className={classes.cardHeader}>{name}</div> 
                            <div className={classes.cardContent}>{description}</div>
                            <div>
                                <span className={classes.cardPrice}>${price}</span>
                            </div>
                            <Button
                                size="small"
                                variant="outlined" 
                                onClick={addToCart}
                                >Add to Bag</Button>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </div>
    );
}

export default ProductItem;
