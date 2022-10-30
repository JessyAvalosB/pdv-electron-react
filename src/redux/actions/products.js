import {productsTypes} from '../types';

export const setProducts = (products) => {
    return {
        type: productsTypes.SET_PRODUCTS,
        payload: products,
    }
}