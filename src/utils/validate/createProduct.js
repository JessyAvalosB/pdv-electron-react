import { alertTypes } from "../../components/Alerts/constants";

const createProduct = (product, setAlerts) => {
    let flag = true;
    let alertTimer;

    setAlerts([]);

    if (alertTimer) {
        clearTimeout(alertTimer);
    }

    if (product.code.length === 0) {
        setAlerts(prevSatate => [
            ...prevSatate,
            {
                typeAlert: alertTypes.warning,
                title: 'Field Required',
                body: 'The Code field is required.',
            },
        ]);
        flag = false;
    }

    if (product.code.length < 12) {
        setAlerts(prevSatate => [
            ...prevSatate,
            {
                typeAlert: alertTypes.danger,
                title: 'Field Incomplete',
                body: 'The code field must have a minimum of 12 characters.',
            },
        ]);
        flag = false;
    }

    if (product.name.length === 0) {
        setAlerts(prevSatate => [
            ...prevSatate,
            {
                typeAlert: alertTypes.warning,
                title: 'Field Required',
                body: 'The Name field is required.',
            },
        ]);
        flag = false;
    }

    if (product.price === '0.00' || product.price === '0') {
        setAlerts(prevSatate => [
            ...prevSatate,
            {
                typeAlert: alertTypes.warning,
                title: 'Field Required',
                body: 'The Price field is required.',
            },
        ]);
        flag = false;
    }

    if (product.manage_stock) {
        if ((product.min_stock > 0 && product.max_stock > 0) && (product.max_stock < product.min_stock)) {
            setAlerts(prevSatate => [
                ...prevSatate,
                {
                    typeAlert: alertTypes.danger,
                    title: 'Max Stock',
                    body: 'The value of Max Stock must be greater than Min Stock.',
                },
            ]);
            flag = false;
        }
    }

    if (!flag) {
        alertTimer = setTimeout(() => {
            setAlerts([]);
        }, 5000);
    }

    return flag;
}

export default createProduct;