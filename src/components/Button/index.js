import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
  size: PropTypes.oneOf(['sm', 'm', 'l', null]),
  width: PropTypes.oneOf(['fill', 'hug', null]),
  btnStyle: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'link',
    'destructive',
    'with-legend',
    null,
  ]),
  onClick: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

const defaultProps = {
  type: 'button',
  size: 'm',
  width: 'fill',
  btnStyle: 'primary',
  className: '',
};

const Button = React.forwardRef(
  ({
    type,
    size, // m
    width, // fill, hug
    btnStyle, // primary, secondary, tertiary, link, destructive
    className,
    onClick,
    children,
    ...rest
  }, ref) => (
    <button
      type={type}
      onClick={onClick}
      ref={ref}
      className={classnames(
        'button',
        Array.isArray(className) ? className.join(' ') : className,
        `button--${btnStyle}`,
        `button--${size}`,
        `button--${width}`,
      )}
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
