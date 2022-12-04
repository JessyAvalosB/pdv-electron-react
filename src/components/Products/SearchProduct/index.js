import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './index.css';

import Input from '../../UI/Input';
import Button from '../../UI/Button';

import { setProducts } from '../../../redux/actions/products';
import { getFilterProducts, getProducts } from '../../../axios requests/products';

const SearchProduct = () => {
    const dispatch = useDispatch();
    const [searchProduct, setSearchProduct] = useState('');

    const handleChangeSearchProduct = (event) => {
        const { value } = event.target;
        setSearchProduct(value);
    };

    const handleSubmitSearchProduct = async () => {
        dispatch(setProducts(await getFilterProducts(searchProduct)));
    };

    const handleClearSearchProduct = async () => {
        setSearchProduct('');
        dispatch(setProducts(await getProducts()));
    };
    return (
        <>
            <Input
                toggleLabel={true}
                value={searchProduct}
                label='Search Product'
                onChange={handleChangeSearchProduct} />
            <Button
                type='button'
                btnClass='outline-primary'
                onClick={handleSubmitSearchProduct}>
                Search
            </Button>
            <Button
                type='button'
                disabled={searchProduct.length === 0 ? true : false}
                btnClass='primary'
                onClick={handleClearSearchProduct}>
                Clear Search
            </Button>
        </>
    );
}

export default SearchProduct;