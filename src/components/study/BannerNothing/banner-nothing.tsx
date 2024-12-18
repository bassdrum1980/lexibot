import classnames from 'classnames';
import IconNothingXXLRound from 'svg/IconNothingXXLRound';
import './index.scss';

type BannerNothingType = {
  className?: string | string[];
};

export const BannerNothing: React.FC<BannerNothingType> = ({ className }) => (
  <div
    className={classnames(
      'banner',
      'banner--nothing',
      Array.isArray(className) ? className.join(' ') : className
    )}
  >
    <IconNothingXXLRound />
    <h2 className="banner__title">Nothing to Study</h2>
    <div className="banner__text">
      Your queue is currently empty. Add new ones to continue your learning
      journey.
    </div>
  </div>
);
