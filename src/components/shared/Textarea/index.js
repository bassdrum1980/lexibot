import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isRequired: PropTypes.bool,
  isValid: PropTypes.bool,
  label: PropTypes.string,
  validationText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  name: '',
  id: '',
  placeholder: '',
  value: '',
  className: '',
  isRequired: false,
  isValid: true,
  label: '',
  validationText: '',
};

const Textarea = ({
  name,
  id,
  placeholder,
  value,
  className,
  isRequired,
  isValid,
  label,
  validationText,
  onChange,
  ...rest
}) => (
  <div
    className={classnames(
      'form-group',
      Array.isArray(className) ? className.join(' ') : className,
      { 'form-group--required': isRequired },
      { 'form-group--invalid': !isValid },
      { 'form-group--has-label': label },
    )}
    {...rest}
  >
    {label && <label htmlFor={id}>{label}</label>}
    <textarea
      placeholder={placeholder}
      value={value}
      name={name}
      id={id}
      onChange={onChange}
      className="form-textarea"
    />
    {validationText && <span className="form-group__validationText">{validationText}</span>}
  </div>
);

Textarea.displayName = 'Input';
Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
