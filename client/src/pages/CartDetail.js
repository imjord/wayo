import React from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";


import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Card } from '@material-ui/core';


// function for cart products
function CartDetail() {

    return (
    <Card 
        Container
        JustifyContent="Center"
    >
        <Link to="/products">
            <ArrowBackIosNewIcon />
        </Link>
        <Cart />
    </Card>
  )
};

export default CartDetail;
