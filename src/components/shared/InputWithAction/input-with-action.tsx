/**
 * The component expects a 32x32 svg icon
 * passed as children.
 */

import { ReactNode } from 'react';
import { Input } from 'components';
import { InputType } from '../Input';
import './index.scss';

interface InputWithActionType extends InputType {
  children: ReactNode;
}

export const InputWithAction: React.FC<InputWithActionType> = ({
  children,
  ...rest
}) => (
  <div className="action-wrapper">
    <Input {...rest} />
    <button
      className="action-wrapper__button"
      type="submit"
    >
      {children}
    </button>
  </div>
);
