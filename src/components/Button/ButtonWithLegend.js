import React from 'react';
import PropTypes from 'prop-types';
import Button from './index';
import './index.scss';

const propTypes = {
  legend: PropTypes.string,
};

const defaultProps = {
  legend: '',
};

const ButtonWithLegend = ({
  legend,
  children,
  ...rest
}) => (
  <Button
    btnStyle="with-legend"
    size="sm"
    {...rest}
  >
    {children}
    {legend && <span className="button__legend">{legend}</span>}
  </Button>
);

ButtonWithLegend.displayName = 'ButtonWithLegend'; // dev tools alias
ButtonWithLegend.propTypes = propTypes;
ButtonWithLegend.defaultProps = defaultProps;

export default ButtonWithLegend;
