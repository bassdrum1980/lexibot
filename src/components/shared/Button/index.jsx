import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.scss';

const propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
  size: PropTypes.oneOf(['s', 'sm', 'm', 'l', 'inline', null]),
  width: PropTypes.oneOf(['fill', 'hug', null]),
  btnStyle: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'plain',
    'destructive',
    'legend',
    'link',
    'pseudo',
    'icon',
    null,
  ]),
  onClick: PropTypes.func.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

const Button = React.forwardRef(
  (
    {
      type = 'button',
      size = 'm',
      width = 'fill',
      btnStyle = 'primary',
      className,
      onClick,
      children,
      ...rest
    },
    ref
  ) => (
    <button
      type={type}
      onClick={onClick}
      ref={ref}
      className={classnames(
        'button',
        Array.isArray(className) ? className.join(' ') : className,
        `button--${btnStyle}`,
        `button--${size}`,
        `button--${width}`
      )}
      {...rest}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button'; // dev tools alias
Button.propTypes = propTypes;

export default Button;
