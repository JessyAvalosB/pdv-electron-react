import React from "react";
import { Label } from "../Label";

const Input = React.forwardRef(({ name, required = false, value = '', invalidText = '', ...rest }, ref) => {
    return (
        <div className={`form-group ${rest.groupclass}`}>
            {rest.label && <Label value={value} {...rest} />}
            <input name={name}
                className="form-control"
                required={required}
                ref={ref}
                {...rest} />
            <div className="invalid-feedback">{invalidText}</div>
        </div>
    );
});

export default Input;