import { productsTypes } from '../types';

export const setProducts = (products) => {
    return {
        type: productsTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const updateProduct = (product) => {
    return {
        type: productsTypes.UPDATE_PRODUCT,
        payload: product,
    }
};

export const clearUpdateProduct = () => {
    return {
        type: productsTypes.CLEAR_UPDATE_PRODUCT,
        payload: null,
    };
};