import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isDisabled: PropTypes.bool,
  isValid: PropTypes.bool,
};

const defaultProps = {
  placeholder: '',
  value: '',
  name: '',
  id: '',
  className: '',
  isDisabled: false,
  isValid: true,
};

const Input = ({
  placeholder, value, name, id, onChange, className, isDisabled, isValid, ...rest
}) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    name={name}
    id={id}
    onChange={onChange}
    className={classnames(
      'form-input',
      Array.isArray(className) ? className.join(' ') : className,
      { 'form-input--disabled': isDisabled },
      { 'form-input--invalid': !isValid },
    )}
    disabled={isDisabled}
    {...rest}
  />
);

Input.displayName = 'Input';
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
