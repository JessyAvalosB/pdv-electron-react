import axios from 'axios';
import { apiProducts as API } from './constants';

export const getProducts = async (setProducts) => {
    await axios
        .get(API.getAllProducts)
        .then(data => {
            if (data.status === 200) {
                setProducts(data.data.products);
            }
        })
        .catch(err => {
            // TODO: handle error
            console.log(err);
        });
}

export const createProduct = async (product) => {
    let response = null;
    await axios
        .post(API.createProduct, product)
        .then(data => response = data)
        .catch(err => response = err.response);
    return response;
};

