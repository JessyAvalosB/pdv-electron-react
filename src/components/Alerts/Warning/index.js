import React from 'react';

import Alert from '../Alert';
import { alertTypes } from '../constants';

const WarningAlert = (props) => {
    return (
        <Alert typeAlert={alertTypes.warning} {...props} />
    );
};

export default WarningAlert;