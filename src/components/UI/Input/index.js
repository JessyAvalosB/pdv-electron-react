import React from "react";
import { Label } from "../Label";

const Input = React.forwardRef(({ name, required = false, value = '', invalidText = '', ...rest }, ref) => {
    return (
        <div className={`form-group ${rest.groupclass}`}>
            {rest.label && <Label value={value} {...rest} />}
            <input
                ref={ref}
                name={name}
                value={value}
                required={required}
                className="form-control"
                {...rest} />
            <div className="invalid-feedback">{invalidText}</div>
        </div>
    );
});

export default Input;