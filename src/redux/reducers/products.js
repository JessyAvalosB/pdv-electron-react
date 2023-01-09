import {productsTypes} from '../types';

const initialState = {
    products: [],
    updateProduct: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case productsTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case productsTypes.UPDATE_PRODUCT:
            return {
                ...state,
                updateProduct: action.payload
            }
        case productsTypes.CLEAR_UPDATE_PRODUCT:
            return {
                ...state,
                updateProduct: action.payload
            }
        default:
            return state
    }
};

export default productReducer;