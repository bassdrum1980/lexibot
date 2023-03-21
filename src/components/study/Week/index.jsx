import classnames from 'classnames';
import PropTypes from 'prop-types';

import IconStar from 'svg/IconStar';
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

const Week = ({ stats, className, ...rest }) => {
  const currentStats = getWeekStats(stats);

  return (
    <div
      className={classnames(
        'week',
        Array.isArray(className) ? className.join(' ') : className
      )}
      {...rest}
    >
      <ul className="week__list">
        {currentStats.map(({ id, day, isPracticed }) => (
          <li key={id} className="week__item">
            <span>{day}</span>
            <IconStar
              fill={isPracticed ? 'var(--flame1000)' : 'var(--gray300)'}
              width="24"
              height="24"
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
