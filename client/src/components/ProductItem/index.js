import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/action";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
    const [state, dispatch] = useStoreContext();

    const {
        image,
        name,
        _id,
        price,
    } = item;

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id)
        if (itemInCart) {
        dispatch({
            type: UPDATE_CART_QUANTITY,
            _id: _id,
        });
        idbPromise('cart', 'put', {
            ...itemInCart,
        });
        } else {
        dispatch({
            type: ADD_TO_CART,
            products: { ...item}
        });
        idbPromise('cart', 'put', { ...item});
        }
    }

    return (
        <div className="card px-1 py-1">
        <Link to={`/products/${_id}`}>
            <img
            alt={name}
            src={`/images/${image}`}
            />
            <p>{name}</p>
        </Link>
        <div>
            <span>${price}</span>
        </div>
        <button onClick={addToCart}>Add to Bag</button>
        </div>
    );
}

export default ProductItem;
