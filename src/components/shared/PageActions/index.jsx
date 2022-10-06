/**
 * Renders a bar with the passed page's actions.
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

const PageActions = ({
  className,
  children,
  ...rest
}) => (
  <div
    className={classnames(
      'page-actions',
      Array.isArray(className) ? className.join(' ') : className,
    )}
    {...rest}
  >
    {children}
  </div>
);

PageActions.displayName = 'Page Actions Section';
PageActions.propTypes = propTypes;
PageActions.defaultProps = defaultProps;

export default PageActions;
