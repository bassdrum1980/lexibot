import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  label: PropTypes.string,
  validationText: PropTypes.string,
  isRequired: PropTypes.bool,
  isValid: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

const defaultProps = {
  label: '',
  validationText: '',
  isRequired: false,
  isValid: true,
  className: '',
};

const FormGroup = ({
  label,
  validationText,
  isRequired,
  isValid,
  className,
  children,
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
    <label className="form-group__label">
      <div className="form-group__label__text">{label}</div>
      {children}
    </label>
    {validationText && <span className="form-group__validationText">{validationText}</span>}
  </div>
);

FormGroup.displayName = 'FormGroup';
FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
