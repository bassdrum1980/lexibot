import React from 'react';
import classnames from 'classnames';
import './button.scss';

export enum BUTTON_SIZES {
  SMALL = 's',
  SMALL_MEDIUM = 'sm',
  MEDIUM = 'm',
  LARGE = 'l',
  INLINE = 'inline',
}

export enum BUTTON_WIDTHS {
  FILL = 'fill',
  HUG = 'hug',
}

export enum BUTTON_STYLES {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  PLAIN = 'plain',
  DESTRUCTIVE = 'destructive',
  LINK = 'link',
  PSEUDO = 'pseudo',
  ICON = 'icon',
}

export interface ButtonType {
  type?: 'button' | 'reset' | 'submit';
  size?: BUTTON_SIZES;
  width?: BUTTON_WIDTHS;
  btnStyle?: BUTTON_STYLES;
  className?: string | string[];
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonType> = ({
  type = 'button',
  btnStyle = BUTTON_STYLES.PRIMARY,
  size = BUTTON_SIZES.MEDIUM,
  width = BUTTON_WIDTHS.FILL,
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
