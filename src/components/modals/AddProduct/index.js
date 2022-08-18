import React from 'react';
import Button from '../../UI/Button';
import { InputText } from '../../UI/Inputs';

import './index.css';

const AddProduct = () => {

    const handleCloseModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.remove('show');
    };

    const handleChangeStockManage = (event) => {
        const stockManage = event.target.checked;
        const inputs = document.querySelectorAll('.manage-stock');
        inputs.forEach(input => {
            input.classList.toggle('show');
            input.disabled = stockManage;
        });
    };

    const handleClickSubmit = () => {
        const form = document.querySelector('form');
        form.submit();
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('hola')
    };

    return (
        <div className="modal fade" id="add-product-modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">New Product</h5>
                        <Button type="button" btnClass="close" onClick={handleCloseModal}>
                            <span aria-hidden="true"></span>
                        </Button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleOnSubmit} noValidate>
                            <div className="col-sm-12">
                                <InputText name='name' placeholder="Product Name" required={true} />
                                <InputText name='price' placeholder="Product Price" required={true} />
                                <InputText name='code' placeholder="Product Code" required={true} />
                                {/* TODO: Work more on InputNumber Component */}
                                <div className="form-group manage-stock fade">
                                    <input id="stock" name="stock" type="number" min="0" placeholder="Product's stock" className="form-control" required />
                                    <div className="invalid-feedback">A product stock is necesary.</div>
                                </div>
                                <div className="form-group manage-stock fade">
                                    <input id="min_stock" name="min_stock" type="number" min="1" placeholder="Product's min stock" className="form-control" />
                                </div>
                                <div className="form-group manage-stock fade">
                                    <input id="max_stock" name="max_stock" type="number" min="1" placeholder="Product's max stock" className="form-control" />
                                </div>
                            </div>
                            {/* TODO: Create InputCheckbox Component */}
                            <div className="form-check">
                                <input id="manage_stock" name="manage_stock" type="checkbox" className="form-check-input"
                                    onChange={handleChangeStockManage} />
                                <label htmlFor="manage_stock" className="form-check-label">Manage product stock?</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <Button type="button" btnClass="primary" onClick={handleClickSubmit}>Save</Button>
                        <Button type="button" btnClass="secondary" onClick={handleCloseModal}>Close</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;