import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
};

const defaultProps = {
  placeholder: '',
  value: '',
  name: '',
  className: '',
  isDisabled: false,
  isValid: true,
};

const Input = ({
  placeholder, value, name, onChange, className, isDisabled, isValid, style, ...rest
}) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    name={name}
    onChange={onChange}
    className={classnames(
      'input',
      Array.isArray(className) ? className.join(' ') : className,
      { 'input--disabled': isDisabled },
      { 'input--invalid': !isValid },
      `input--${style}`,
    )}
    disabled={isDisabled}
    {...rest}
  />
);

Input.displayName = 'Input';
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
