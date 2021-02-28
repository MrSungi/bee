import * as actionTypes from './shoppingTypes';
import data from '../../static/data';

const initialState = {
    products: data.products, // {id, title, descr, price, img}
    cart: [],   // {id, title, price, qty}
    currentItem: null,
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // Great Item data from products array
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? {...item, qty: action.payload.qty}
                        : item
                ),
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;