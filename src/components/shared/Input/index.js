import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isValid: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  className: '',
  isValid: true,
};

const Input = ({
  className,
  isValid,
  onChange,
  ...rest
}) => (
  <input
    className={classnames(
      'form-input',
      Array.isArray(className) ? className.join(' ') : className,
      { 'form-input--invalid': !isValid },
    )}
    onChange={onChange}
    {...rest}
  />
);

Input.displayName = 'Input';
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
