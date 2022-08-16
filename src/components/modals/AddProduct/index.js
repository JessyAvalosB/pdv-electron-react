import React from 'react';

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
                        <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleOnSubmit} noValidate>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <input id="name" name="name" type="text" placeholder="Product's name" className="form-control" required />
                                    <div className="invalid-feedback">A product name is necesary.</div>
                                </div>
                                <div className="form-group">
                                    <input id="price" name="price" type="text" placeholder="Product's price" className="form-control" required
                                        onkeypress="return onlyNumber(event)" />
                                    <div className="invalid-feedback">A product price is necesary</div>
                                </div>
                                <div className="form-group">
                                    <input id="code" name="code" type="text" placeholder="Product's code" className="form-control" required />
                                    <div className="invalid-feedback">A product code is necesary.</div>
                                </div>
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
                            <div className="form-check">
                                <input id="manage_stock" name="manage_stock" type="checkbox" className="form-check-input"
                                    onChange={handleChangeStockManage} />
                                <label htmlFor="manage_stock" className="form-check-label">Manage product stock?</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleClickSubmit}>Save</button>
                        <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;