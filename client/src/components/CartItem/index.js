import React from 'react';

import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/action";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {

    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseProducts: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseProducts: parseInt(value) });
      console.log("value", value);
    }
  }

  return (
    <div>
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseProducts}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="remove"
            onClick={() => removeFromCart(item)}
          >
            <DeleteForeverIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;