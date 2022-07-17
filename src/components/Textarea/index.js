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

const Textarea = ({
  placeholder, value, name, onChange, className, isDisabled, isValid, ...rest
}) => (
  <textarea
    placeholder={placeholder}
    value={value}
    name={name}
    id={name}
    onChange={onChange}
    className={classnames(
      'input',
      Array.isArray(className) ? className.join(' ') : className,
      { 'input--disabled': isDisabled },
      { 'input--invalid': !isValid },
    )}
    disabled={isDisabled}
    {...rest}
  />
);

Textarea.displayName = 'Textarea';
Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
