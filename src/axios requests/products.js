import axios from 'axios';
import { apiProducts as API } from './constants';

export const getProducts = async () => {
    let products = [];
    await axios
        .get(API.getAllProducts)
        .then(data => {
            if (data.status === 200) {
                products = data.data.products;
            }
        })
        .catch(err => {
            // TODO: handle error
            console.log(err);
        });
    return products;
}

export const getFilterProducts = async (search) => {
    let products = [];
    await axios
        .post(API.searchProduct, { search })
        .then(data => {
            if (data.status === 200) {
                products = data.data.products;
            }
        })
        .catch(err => {
            // TODO: handle error
            console.log(err);
        });
    return products;
};

export const createProduct = async (product) => {
    let response = null;
    let url = product.hasOwnProperty('id') ? API.updateProduct : API.createProduct;
    await axios
        .post(url, product)
        .then(data => response = data)
        .catch(err => response = err.response);
    return response;
};

export const updateProduct = async (product) => {
    let response = null;
    await axios
        .put(API.updateProduct, product)
        .then(data => response = data)
        .catch(err => response = err.response);
    return response;
}

export const deleteProduct = async (id) => {
    let response;
    await axios
        .delete(`${API.deleteProduct}/${id}`)
        .then(data => response = data)
        .catch(err => response = err.response);
    return response;
}
