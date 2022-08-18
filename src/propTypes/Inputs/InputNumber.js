import PropTypes from 'prop-types';

export const InputNumberPropTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    required: PropTypes.bool,
    value: PropTypes.string,
    invalidText: PropTypes.string,
    min: PropTypes.number.isRequired,
    divClass: PropTypes.string,
}