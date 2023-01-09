import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './index.css';

import Input from '../../UI/Input';
import Button from '../../UI/Button';

import { setProducts } from '../../../redux/actions/products';
import { getFilterProducts, getProducts } from '../../../axios requests/products';
import { getPaginationConfig } from '../../../redux/selectors/pagination';
import { setPage, setTotalItems } from '../../../redux/actions/pagination';

const SearchProduct = () => {
    const [searchProduct, setSearchProduct] = useState('');
    const { page, limit } = useSelector(getPaginationConfig);
    const dispatch = useDispatch();

    const handleChangeSearchProduct = (event) => {
        const { value } = event.target;
        setSearchProduct(value);
    };

    const handleSubmitSearchProduct = async () => {
        dispatch(setProducts(await getFilterProducts(searchProduct)));
    };

    const handleClearSearchProduct = async () => {
        setSearchProduct('');
        dispatch(setPage(1));
        const { results, totalItems } = await getProducts({ page, limit });
        dispatch(setProducts(results));
        dispatch(setTotalItems(totalItems));
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