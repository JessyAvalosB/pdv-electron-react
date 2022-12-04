import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import './index.css';

import Button from "../UI/Button";
import AddProduct from "../modals/AddProduct";
import AlertContainer from "../Alerts/AlertContainer";
import ProductsControlPanel from "./ProductsControlPanel";

import { alertTypes } from "../Alerts/constants";
import { setAlerts } from "../../redux/actions/alerts";
import { setProducts, updateProduct } from "../../redux/actions/products";
import { deleteProduct, getProducts } from "../../axios requests/products.js";
import { getProducts as getProductsSelector } from "../../redux/selectors/products";
import { getAlerts as getAlertsSelectors } from "../../redux/selectors/alerts";

const Products = () => {
    const alerts = useSelector(getAlertsSelectors)
    const products = useSelector(getProductsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        let isSubscribed = true;
        if (isSubscribed) {
            setProductsData();
        }
        return () => isSubscribed = false;
    }, []);

    const setProductsData = async () => dispatch(setProducts(await getProducts()));

    const handleEditProduct = (product) => {
        dispatch(updateProduct(product));
        const modal = document.querySelector('#add-product-modal');
        modal.classList.add('show');
    }

    const handleDeleteProduct = async (id) => {
        const res = await deleteProduct(id);
        switch (res.status) {
            case 200:
                dispatch(setProducts(await getProducts()));
                break;
            case 409:
                dispatch(setAlerts([{
                    typeAlert: alertTypes.danger,
                    title: 'Error deleting product.',
                    body: 'Please try again.',
                }]));
                break;
            default:
                break;
        }
    };
    return (
        <div className="container p-4">
            <ProductsControlPanel />
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
                            <td>${parseFloat(product.price).toFixed(2)}</td>
                            <td>{!product.manage_stock ? 'Disabled' : 'Enabled'}</td>
                            <td>{!product.manage_stock ? '-' : product.stock}</td>
                            <td>{!product.manage_stock ? '-' : product.min_stock}</td>
                            <td>{!product.manage_stock ? '-' : product.max_stock}</td>
                            <td>{moment(product.created_at).format('L LT')}</td>
                            <td>
                                <Button
                                    type='button'
                                    onClick={() => handleEditProduct(product)}
                                    style={{ padding: '0' }}>
                                    <span
                                        className="material-symbols-outlined">
                                        edit
                                    </span>
                                </Button>
                                <Button
                                    type='button'
                                    onClick={() => handleDeleteProduct(product.id)}
                                    style={{ padding: '0' }}>
                                    <span
                                        className="material-symbols-outlined">
                                        delete
                                    </span>
                                </Button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <AddProduct />
            <AlertContainer alerts={alerts} />
        </div>
    );
};

export default Products;