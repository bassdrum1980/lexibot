import classnames from 'classnames';
import PropTypes from 'prop-types';

import { Icon } from 'components';
import { getWeekStats } from './getWeekStats';
import './index.scss';

const propTypes = {
  stats: PropTypes.arrayOf(PropTypes.number),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
};

const defaultProps = {
  stats: [],
  className: '',
  type: 'default',
};

const Week = ({
  stats, className, ...rest
}) => {
  const currentStats = getWeekStats(stats);

  return (
    <div
      className={classnames(
        'week',
        Array.isArray(className) ? className.join(' ') : className,
      )}
      {...rest}
    >
      <ul className="week__list">
        {currentStats.map((day, i) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="week__item"
          >
            <span>{currentStats[i].day}</span>
            <Icon
              name={currentStats[i].isPracticed ? 'star-flame' : 'star'}
              size={24}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

Week.displayName = 'Week';
Week.propTypes = propTypes;
Week.defaultProps = defaultProps;

export default Week;
