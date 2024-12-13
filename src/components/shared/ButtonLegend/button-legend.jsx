import PropTypes from 'prop-types';

import { Button } from 'components';
import './index.scss';

const propTypes = {
  legend: PropTypes.string,
};

const defaultProps = {
  legend: '',
};

export const ButtonLegend = ({ legend, children, ...rest }) => (
  <Button
    className="button--legend"
    size="sm"
    {...rest}
  >
    {children}
    {legend && <span className="button__legend">{legend}</span>}
  </Button>
);

ButtonLegend.propTypes = propTypes;
ButtonLegend.defaultProps = defaultProps;
