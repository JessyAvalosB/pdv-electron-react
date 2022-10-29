import React, { useEffect, useState } from "react";
import moment from "moment";

import './index.css';

import AddProduct from "../modals/AddProduct";
import Button from "../UI/Button";

import { getProducts } from "../../axios requests/products.js";
import AlertContainer from "../Alerts/AlertContainer";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        let isSubscribed = true;
        if (isSubscribed) {
            getProducts(setProducts);
        }
        return () => isSubscribed = false;
    }, []);

    const handleClickAddProduct = () => {
        const modal = document.querySelector('#add-product-modal');
        modal.classList.add('show');
    };

    return (
        <div className="container p-4">
            <div className="d-flex justify-content-end mb-3">
                <Button
                    type="button"
                    btnClass="primary"
                    onClick={handleClickAddProduct}>
                    Add New product
                </Button>
            </div>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Manage Stock</th>
                        <th>Stock</th>
                        <th>Min Stock</th>
                        <th>Max Stock</th>
                        <th>Created at</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 && products.map((product) => {
                        product.manage_stock = Boolean(product.manage_stock);
                        return <tr className="animate__animated animate__fadeInDown" key={`row-${product.id}`}>
                            <td>{product.code}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{!product.manage_stock ? 'Disabled' : 'Enabled'}</td>
                            <td>{!product.manage_stock ? '-' : product.stock}</td>
                            <td>{!product.manage_stock ? '-' : product.min_stock}</td>
                            <td>{!product.manage_stock ? '-' : product.max_stock}</td>
                            <td>{moment(product.created_at).format('L LT')}</td>
                            <td>
                                <span className="material-symbols-outlined editProduct" data-id={product.id}>edit</span>
                                <span className="material-symbols-outlined deleteProduct" data-id={product.id}>delete</span>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <AddProduct setAlerts={setAlerts} />
            <AlertContainer alerts={alerts} />
        </div>
    );
};

export default Products;