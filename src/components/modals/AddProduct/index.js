import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct, getProducts } from '../../../axios requests/products';
import { detachOnScan, initOnScan } from '../../../onScan';
import { clearAlerts, setAlerts } from '../../../redux/actions/alerts';
import { setProducts } from '../../../redux/actions/products';

import { validate } from '../../../utils';
import { alertTypes } from '../../Alerts/constants';
import CheckBox from '../../UI/CheckBox';
import Input from '../../UI/Input';
import RadioGroup from '../../UI/RadioGroup';
import Modal from '../Modal';

import './index.css';

const AddProduct = () => {
    const inputCode = useRef();
    const dispatch = useDispatch();
    const [product, setProduct] = useState({
        name: '',
        price: '0',
        code: '',
        stock: '0',
        min_stock: '0',
        max_stock: '0',
        manage_stock: false,
        unity: '1',
    });

    useEffect(() => {
        initOnScan(handleScanned);

        return () => (detachOnScan());
    }, []);

    useEffect(() => {
        if (inputCode) {
            inputCode.current.value = product.code;
        }
    }, [product.code]);

    const handleScanned = (code) => {
        setProduct((prevSatate) => ({
            ...prevSatate,
            code,
        }));
    };

    const toggleShowManageStock = (flag) => {
        const inputs = document.querySelectorAll('.manage-stock');
        inputs.forEach(input => {
            input.classList.toggle('show');
            input.disabled = flag;
        });
    };

    const handleCloseModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.remove('show');
        setProduct({
            name: '',
            price: '',
            code: '',
            stock: 0,
            min_stock: 0,
            max_stock: 0,
            manage_stock: false,
            unity: '1'
        });
        const inputs = document.querySelectorAll('.manage-stock');
        inputs.forEach(input => {
            input.classList.toggle('show', false);
            input.disabled = false;
        });
        dispatch(clearAlerts());
    };

    const handleChangeStockManage = (event) => {
        const stockManage = event.target.checked;
        toggleShowManageStock(stockManage);
        setProduct(prevState => ({
            ...prevState,
            manage_stock: stockManage
        }));
    };

    const handleInputChange = (input) => {
        const { name } = input.target;
        let { value } = input.target;

        if (name === 'price' ||
            name === 'stock' ||
            name === 'min_stock' ||
            name === 'max_stock') {
            value = parseFloat(value).toFixed(2);
        }

        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleClickSubmit = async () => {
        const { alerts, flag } = validate.createProduct(product);
        if (flag) {
            const res = await createProduct(product);
            switch (res.status) {
                case 201:
                    dispatch(setProducts(await getProducts()));
                    handleCloseModal();
                    break;
                case 409:
                    dispatch(setAlerts([{
                        typeAlert: alertTypes.danger,
                        title: 'Error saving product.',
                        body: 'Verify that the product code has not been previously used.',
                    }]));
                    break;
                default:
                    break;
            }
        } else {
            dispatch(setAlerts(alerts));
            setTimeout(() => {
                dispatch(clearAlerts());
            }, 5000);
        }
    }

    const buttons = [
        {
            id: 'radioButtonPiece',
            name: 'unity',
            value: 1,
            checked: product.unity === '1',
            label: 'Piece',
            onChange: handleInputChange
        },
        {
            id: 'radioButtonBulk',
            name: 'unity',
            value: 2,
            checked: product.unity === '2',
            label: 'Bulk',
            onChange: handleInputChange
        },
    ];

    return (
        <Modal
            headerText='New Product'
            handleCloseModal={handleCloseModal}
            toogleCloseModal={true}
            toggleShowFooter={true}
            confirmText='Submit'
            closeText='Cancel'
            handleClickConfirm={handleClickSubmit}
            toggleCloseModal={true}>
            <form noValidate>
                <div className="col-sm-12">
                    <Input
                        id='code'
                        type='text'
                        name='code'
                        maxLength={12}
                        ref={inputCode}
                        required={true}
                        label='Product Code'
                        value={product.code}
                        onChange={handleInputChange} />
                </div>
                <div className='row'>
                    <div className="col-sm-6">
                        <Input
                            type='text'
                            name='name'
                            required={true}
                            label='Product Name'
                            value={product.name}
                            onChange={handleInputChange} />
                    </div>
                    <div className="col-sm-6">
                        <Input
                            min={0}
                            step={.50}
                            name='price'
                            type='number'
                            required={true}
                            value={product.price}
                            label='Product Price ($)'
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <RadioGroup legend='Unity' buttons={buttons} groupClass='manage-stock fade' />
                    </div>
                    <div className='col-sm-6'>
                        <Input
                            min={0}
                            step={.50}
                            name='stock'
                            type='number'
                            label='Stock'
                            value={product.stock}
                            groupClass='manage-stock fade'
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6'>
                        <Input
                            min={0}
                            step={.50}
                            name='min_stock'
                            type='number'
                            label='Min Stock'
                            value={product.min_stock}
                            groupClass='manage-stock fade'
                            onChange={handleInputChange} />
                    </div>
                    <div className='col-sm-6'>
                        <Input
                            min={0}
                            step={.50}
                            name='max_stock'
                            type='number'
                            label='Max Stock'
                            value={product.max_stock}
                            onChange={handleInputChange}
                            groupClass='manage-stock fade' />
                    </div>
                </div>
                <CheckBox
                    id='manage_stock_id'
                    name='manage_stock'
                    label='Manage product stock?'
                    checked={product.manage_stock}
                    onChange={handleChangeStockManage} />
            </form>
        </Modal>
    );
};

export default AddProduct;