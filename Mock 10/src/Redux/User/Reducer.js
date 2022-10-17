import { actionTypes } from "./Action";

const initState = {
    login: false,
    token: JSON.parse(localStorage.getItem('RestauranrUserData')),
    product: [],
    cart: JSON.parse(localStorage.getItem('ProductCartData')) || [],
};

export const ReducerUser = (state = initState, { type,payload }) => {
    switch (type) {
        case actionTypes.FETCH_SUCCESSFUL: {
            return {
            ...state,
             product: payload,
            };
        }
case 'DELETE': {
    localStorage.setItem("ProductCartData", JSON.stringify(payload));
    alert('Deleted Product Successfully !!')
      return {
       ...state,
        cart: [...payload],
};
        }
        case 'INCREASE': {
            localStorage.setItem("ProductCartData", JSON.stringify(payload));
            alert('Quantity Increased By 1 Successfully !!')
            return {
                ...state,
                cart: [...payload],
            };
        }
        case 'DECREASE': {
            localStorage.setItem("ProductCartData", JSON.stringify(payload));
            alert('Quantity Decreased By 1 Successfully !!')
            return {
                ...state,
                cart: [...payload],
            };
        }
        case actionTypes.ADD_TO_CART: {
            let cart = [...state.cart, payload]
            localStorage.setItem("ProductCartData", JSON.stringify(cart));
            return {
                ...state,
                cart: [...state.cart, payload],
            };
        }
        default:
            return state;
    }
};