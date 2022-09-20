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

const Progress = ({
  progress, className, ...rest
}) => (
  <div
    className={classnames(
      'progress',
      Array.isArray(className) ? className.join(' ') : className,
    )}
    {...rest}
  >
    <div className="progress__bar" style={{ width: `${progress}%` }} />
  </div>
);

Progress.displayName = 'Progress';
Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default Progress;
