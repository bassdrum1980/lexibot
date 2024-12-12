import React from 'react';
import classnames from 'classnames';
import './index.scss';

type ButtonType = {
  type?: 'button' | 'reset' | 'submit';
  size?: 's' | 'sm' | 'm' | 'l' | 'inline';
  width?: 'fill' | 'hug';
  btnStyle?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'plain'
    | 'destructive'
    | 'legend'
    | 'link'
    | 'pseudo'
    | 'icon';
  className?: string | string[];
  onClick?: () => void;
  children: React.ReactNode;
};

export const Button = ({
  type = 'button',
  size = 'm',
  width = 'fill',
  btnStyle = 'primary',
  className,
  onClick,
  children,
  ...rest
}: ButtonType) => (
  <button
    type={type}
    onClick={onClick}
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
);

export default Button;
