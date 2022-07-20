import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  note: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isRequired: PropTypes.bool,
  isValid: PropTypes.bool,
};

const defaultProps = {
  note: '',
  className: '',
  isRequired: false,
  isValid: true,
};

const FormGroup = ({
  className, isRequired, isValid, note, children, ...rest
}) => (
  <div
    className={classnames(
      'form-group',
      Array.isArray(className) ? className.join(' ') : className,
      { 'form-group--required': isRequired },
    )}
    {...rest}
  >
    {note && (
    <span className={classnames(
      'form-group__note',
      { 'form-group__note--invalid': !isValid },
    )}
    >
      {note}
    </span>
    )}
    {children}
  </div>
);

FormGroup.displayName = 'FormGroup';
FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
