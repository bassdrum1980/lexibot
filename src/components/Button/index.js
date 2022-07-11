import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  isDisabled: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
};

const defaultProps = {
  className: '',
  isDisabled: false,
  size: 'sm',
  type: 'button',
};

const Button = React.forwardRef(
  ({
    children, onClick, className, isDisabled, size, type, ...rest
  }, ref) => (
    <button
      type={type}
      onClick={onClick}
      ref={ref}
      className={classnames(
        'button',
        Array.isArray(className) ? className.join(' ') : className,
        { 'button--isDisabled': isDisabled },
        `button--${size}`,
      )}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  ),
);

Button.displayName = 'Button'; // dev tools alias
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
