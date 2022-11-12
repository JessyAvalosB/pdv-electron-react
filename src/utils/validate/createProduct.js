import { alertTypes } from "../../components/Alerts/constants";

const createProduct = (product) => {
    let flag = true;
    let alerts = [];

    if (product.code.length === 0) {
        alerts.push({
            typeAlert: alertTypes.warning,
            title: 'Field Required',
            body: 'The Code field is required.',
        });
        flag = false;
    }

    if (product.code.length < 12) {
        alerts.push({
            typeAlert: alertTypes.danger,
            title: 'Field Incomplete',
            body: 'The code field must have a minimum of 12 characters.',
        });
        flag = false;
    }

    if (product.name.length === 0) {
        alerts.push({
            typeAlert: alertTypes.warning,
            title: 'Field Required',
            body: 'The Name field is required.',
        });
        flag = false;
    }

    if (product.price === '0.00' || product.price === '0') {
        alerts.push({
            typeAlert: alertTypes.warning,
            title: 'Field Required',
            body: 'The Price field is required.',
        });
        flag = false;
    }

    if (product.manage_stock) {
        if ((product.min_stock > 0 && product.max_stock > 0) && (product.max_stock < product.min_stock)) {
            alerts.push({
                typeAlert: alertTypes.danger,
                title: 'Max Stock',
                body: 'The value of Max Stock must be greater than Min Stock.',
            });
            flag = false;
        }

        if ((product.stock > 0 && product.max_stock > 0) && (product.stock > product.max_stock)) {
            alerts.push({
                typeAlert: alertTypes.danger,
                title: 'Max Stock',
                body: 'The value of Stock must be less than Max Stock.',
            });
            flag = false;
        }
    }

    return {
        flag,
        alerts,
    };
}

export default createProduct;