import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.scss';

const propTypes = {
  value: PropTypes.string,
  onInput: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isValid: PropTypes.bool,
};

const defaultProps = {
  value: '',
  className: '',
  isValid: true,
};

export const Textarea = ({ value, onInput, className, isValid, ...rest }) => (
  <textarea
    className={classnames(
      'form-textarea',
      Array.isArray(className) ? className.join(' ') : className,
      { 'form-textarea--invalid': !isValid }
    )}
    onInput={onInput}
    value={value}
    {...rest}
  />
);

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;
