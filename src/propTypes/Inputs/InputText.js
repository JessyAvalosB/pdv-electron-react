import PropTypes from 'prop-types';

export const InputTextPropTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    required: PropTypes.bool,
    value: PropTypes.string,
    invalidText: PropTypes.string,
}