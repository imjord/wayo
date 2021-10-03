import { useReducer } from "react";
import { UPDATE_PRODUCTS, ADD_TO_CART,REMOVE_FROM_CART, ADD_MULTIPLE_TO_CART, CLEAR_CART, UPDATE_CART_QUANTITY, TOGGLE_CART
} from "./action";

// reducers
export const reducer = (state, action) => {
    switch (action.type) {

        //add products to cart
        case UPDATE_PRODUCTS:
            return {
                ...state,
                product: [action.product],
            };
        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen:true,
                cart: state.cart.map(product => {
                    if (action._id === product._id) {
                        product.purchaseProducts = action.purchaseProducts
                    }
                    return product;
                })
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product],
            };
        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if (action._id === product._id) {
                        product.purchaseProducts = action.purchaseProducts
                    }
                    return product;
                })
            };
        // remove products from cart
        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };
        case REMOVE_FROM_CART: 
            
            let newState = state.cart.filter(product => {
                return product._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };
        // reducer to remove items in cart
        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };
        default:
            return state;
        
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState)
}