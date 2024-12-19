import classnames from 'classnames';
import './input.scss';

export interface InputType {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;

  className?: string | string[];
  isInvalid?: boolean;
  onChange: () => void;
}

export const Input: React.FC<InputType> = (props) => (
  <input
    name={props.name}
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    defaultValue={props.defaultValue}
    className={classnames(
      'form-input',
      Array.isArray(props.className)
        ? props.className.join(' ')
        : props.className,
      { 'form-input--invalid': props.isInvalid }
    )}
    onChange={props.onChange}
  />
);
