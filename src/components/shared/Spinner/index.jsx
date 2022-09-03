import classnames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

const defaultProps = {
  className: '',
};

const Spinner = ({
  className, ...rest
}) => (
  <div
    className={classnames(
      'spinner',
      Array.isArray(className) ? className.join(' ') : className,
    )}
    {...rest}
  >
    <div className="spinner__spinner" />
  </div>
);

Spinner.displayName = 'Spinner';
Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
