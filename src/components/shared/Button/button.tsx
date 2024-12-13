import React from 'react';
import classnames from 'classnames';
import './index.scss';

// Exporting for use in storybook
export const BUTTON_SIZES = ['s', 'sm', 'm', 'l', 'inline'];
export const BUTTON_WIDTHS = ['fill', 'hug'];

type ButtonSize = (typeof BUTTON_SIZES)[number];
type ButtonWidth = (typeof BUTTON_WIDTHS)[number];
type ButtonStyle =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'plain'
  | 'destructive'
  | 'legend'
  | 'link'
  | 'pseudo'
  | 'icon';

interface ButtonType {
  type?: 'button' | 'reset' | 'submit';
  size?: ButtonSize;
  width?: ButtonWidth;
  btnStyle?: ButtonStyle;
  className?: string | string[];
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button = ({
  type = 'button',
  btnStyle = 'primary',
  size = 'm',
  width = 'fill',
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
