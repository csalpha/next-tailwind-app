/*************** imports ***************/
import { createContext, useReducer } from "react";

/*************** Store ***************/
export const Store = createContext();

/*************** initialState ***************/
const initialState = {
  cart: { cartItems: [] },
};

/**
 * reducer
 * @author   Carlos
 * @param    {Object} state    request
 * @param    {Object} action   response
 * @return   {Object} {Object} response
 */

/*************** reducer ***************/
function reducer(state, action) {
  /*************** switch ***************/
  switch (action.type) {
    /*************** CART_ADD_ITEM ***************/
    case "CART_ADD_ITEM": {
      /************** get newItem **************/
      const newItem = action.payload;

      /************** get exitItem *************/
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );

      /************* get cartItems *************/
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      /*************** return ***************/
      return {
        ...state, // keep the previous state
        cart: {
          ...state.cart, // keep the previous values in the cart
          cartItems, // update the cartItems
        },
      };
    }
    /*************** default ***************/
    default:
      /*************** return ***************/
      return state;
  }
}

/*************** StoreProvider ***************/
export function StoreProvider({ children }) {
  // get state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

// {} []
