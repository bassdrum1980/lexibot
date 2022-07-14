import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import IconStar from './star';
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
            className={classnames(
              'week__item',
              { '--active': currentStats[i].isPracticed },
            )}
          >
            <span>{currentStats[i].day}</span>
            <IconStar />
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
