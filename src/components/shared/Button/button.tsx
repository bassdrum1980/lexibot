import React from 'react';
import classnames from 'classnames';
import './button.scss';

// Exporting for use in storybook
export const BUTTON_SIZES = ['s', 'sm', 'm', 'l', 'inline'];
export const BUTTON_WIDTHS = ['fill', 'hug'];
export const BUTTON_STYLES = [
  'primary',
  'secondary',
  'tertiary',
  'plain',
  'destructive',
  'link',
  'pseudo',
  'icon',
];

type ButtonSize = (typeof BUTTON_SIZES)[number];
type ButtonWidth = (typeof BUTTON_WIDTHS)[number];
type ButtonStyle = (typeof BUTTON_STYLES)[number];

export interface ButtonType {
  type?: 'button' | 'reset' | 'submit';
  size?: ButtonSize;
  width?: ButtonWidth;
  btnStyle?: ButtonStyle;
  className?: string | string[];
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonType> = ({
  type = 'button',
  btnStyle = BUTTON_STYLES[0],
  size = BUTTON_WIDTHS[2],
  width = BUTTON_WIDTHS[0],
  className,
  onClick,
  children,
  ...rest
}) => (
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
