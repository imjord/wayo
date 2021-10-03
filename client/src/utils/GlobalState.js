// create and use context from React
import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

// store context function
const StoreContext = createContext();
const { Provider } = StoreContext;

// store provider function for props
const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
  });

  // return state change with props
  return <Provider value={[state, dispatch]} {...props} />;
};

// function to use store context
const useStoreContext = () => {
  return useContext(StoreContext);
};

// function export
export { StoreProvider, useStoreContext };
