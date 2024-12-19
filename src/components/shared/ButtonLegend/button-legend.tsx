import { Button, ButtonType, BUTTON_SIZES, BUTTON_STYLES } from 'components';
import './button-legend.scss';

export interface ButtonLegendType extends ButtonType {
  legend?: string;
}

export const ButtonLegend: React.FC<ButtonLegendType> = ({
  legend,
  children,
  ...rest
}) => (
  <Button
    className="button--legend"
    size={BUTTON_SIZES.SMALL_MEDIUM}
    btnStyle={BUTTON_STYLES.TERTIARY}
    {...rest}
  >
    {children}
    {legend && legend.length > 0 && (
      <span className="button__legend">{legend}</span>
    )}
  </Button>
);
