import PropTypes from 'prop-types';

import { Button } from 'components';
import './index.scss';

const propTypes = {
  legend: PropTypes.string,
};

const defaultProps = {
  legend: '',
};

const ButtonLegend = ({
  legend,
  children,
  ...rest
}) => (
  <Button
    btnStyle="legend"
    size="sm"
    {...rest}
  >
    {children}
    {legend && <span className="button__legend">{legend}</span>}
  </Button>
);

ButtonLegend.displayName = 'ButtonLegend'; // dev tools alias
ButtonLegend.propTypes = propTypes;
ButtonLegend.defaultProps = defaultProps;

export default ButtonLegend;
