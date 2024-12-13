/**
 * Renders a bar with page actions.
 * Has a few different styles, defined by CSS-modifiers.
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.scss';

const propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

const defaultProps = {
  className: '',
};

export const Controls = ({ className, children, ...rest }) => (
  <div
    className={classnames(
      'controls',
      Array.isArray(className) ? className.join(' ') : className
    )}
    {...rest}
  >
    {children}
  </div>
);

Controls.propTypes = propTypes;
Controls.defaultProps = defaultProps;
