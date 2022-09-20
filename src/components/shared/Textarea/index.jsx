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

const Textarea = ({
  className,
  isValid,
  onChange,
  ...rest
}) => (
  <textarea
    className={classnames(
      'form-textarea',
      Array.isArray(className) ? className.join(' ') : className,
      { 'form-textarea--invalid': !isValid },
    )}
    onChange={onChange}
    {...rest}
  />
);

Textarea.displayName = 'Textarea';
Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;
