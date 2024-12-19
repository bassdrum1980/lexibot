import { Button, ButtonType } from 'components';
import './button-legend.scss';

interface ButtonLegendType extends ButtonType {
  legend?: string;
}

export const ButtonLegend: React.FC<ButtonLegendType> = ({
  legend,
  children,
  ...rest
}) => (
  <Button
    className="button--legend"
    size="sm"
    btnStyle="tertiary"
    {...rest}
  >
    {children}
    {legend && legend.length > 0 && (
      <span className="button__legend">{legend}</span>
    )}
  </Button>
);
