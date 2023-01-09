import React from 'react';

import './index.css';

import Button from '../../UI/Button';
import Pagination from '../../Pagination';
import SearchProduct from '../SearchProduct';

const ProductsControlPanel = () => {
    const handleClickAddProduct = () => {
        const modal = document.querySelector('#add-product-modal');
        modal.classList.add('show');
    };
    return (
        <div className="table-control-panel">
            <Pagination />
            <SearchProduct />
            <Button
                type="button"
                btnClass="primary"
                onClick={handleClickAddProduct}>
                +
            </Button>
        </div>
    );
}

export default ProductsControlPanel;