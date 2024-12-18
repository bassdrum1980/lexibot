import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.scss';

const propTypes = {
  progress: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

const defaultProps = {
  progress: 0,
  className: '',
};

export const Progress = ({ progress, className, ...rest }) => (
  <div
    className={classnames(
      'progress',
      Array.isArray(className) ? className.join(' ') : className
    )}
    {...rest}
  >
    <div
      className="progress__bar"
      style={{ width: `${progress}%` }}
    />
  </div>
);

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;
