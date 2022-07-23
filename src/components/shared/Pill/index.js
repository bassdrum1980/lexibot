import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

/**
 * "type" — corresponds to the relating part of speech
 * 'noun', 'interjection', 'preposition', 'conjunction',
 * 'verb', 'adverb', 'adjective', 'various'
 */

const propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
};

const defaultProps = {
  className: '',
  type: 'default',
};

const Pill = ({
  children, type, className, ...rest
}) => (
  <div
    className={classnames(
      'pill',
      Array.isArray(className) ? className.join(' ') : className,
      `pill--${type}`,
    )}
    {...rest}
  >
    {children}
  </div>
);

Pill.displayName = 'Pill';
Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

export default Pill;
