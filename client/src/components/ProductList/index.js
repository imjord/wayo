import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import { useQuery } from '@apollo/react-hooks';
import { UPDATE_PRODUCTS } from "../../utils/action";
import { QUERY_PRODUCTS } from "../../utils/queries";
import giphy from '../../assets/giphy.gif';

import './ProductList.css';


function ProductList() {
    const [state, dispatch] = useStoreContext();
    const { currentCategory } = state;
    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if(data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });
            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        } else if (!loading) {
            idbPromise('products', 'get').then((products) => {
                dispatch({
                type: UPDATE_PRODUCTS,
                products: products
                });
            });
        }
    }, [data, loading, dispatch]);

  // filter displayed products
    function filterProducts() {
        if (!currentCategory) {
        return state.products;
        }

        return state.products.filter(product => product.category._id === currentCategory);
    }

    return (
        <div>
        <h3 className="shopTitle">Products:</h3>
        {state.products.length ? (
            <div className="flex-row">
                {filterProducts().map(product => (
                    <ProductItem
                    key= {product._id}
                    _id={product._id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    />
                ))}
            </div>
        ) : (
            <h4 className="emptyPage">Hmmm Looks a bit empty in here.</h4>
        )}
        { loading ? 
        <img src={giphy} alt="loading" />: null}
        </div>
    );
}

export default ProductList;
