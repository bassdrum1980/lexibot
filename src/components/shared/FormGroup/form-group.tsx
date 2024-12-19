import classnames from 'classnames';
import './form-group.scss';

export interface FormGroupType {
  label: string;
  validationText?: string;
  isRequired?: boolean;
  isValid?: boolean;
  className?: string | string[];
  children: React.ReactNode;
}

export const FormGroup: React.FC<FormGroupType> = ({
  label,
  validationText = 'Required',
  isRequired = false,
  isValid = true,
  className = '',
  children,
  ...rest
}) => (
  <div
    className={classnames(
      'form-group',
      Array.isArray(className) ? className.join(' ') : className,
      { 'form-group--required': isRequired },
      { 'form-group--invalid': !isValid },
      { 'form-group--has-label': label }
    )}
    {...rest}
  >
    <label className="form-group__label">
      <div className="form-group__label__text">{label}</div>
      {children}
    </label>
    {validationText && (
      <span className="form-group__validationText">{validationText}</span>
    )}
  </div>
);
