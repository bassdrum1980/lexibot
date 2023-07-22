import classnames from 'classnames';
import IconCheckXXLRound from 'svg/IconCheckXXLRound';
import './index.scss';

type BannerCompletedType = {
  className?: string | string[];
};

const BannerCompleted: React.FC<BannerCompletedType> = ({ className }) => (
  <div
    className={classnames(
      'banner',
      'banner--completed',
      Array.isArray(className) ? className.join(' ') : className
    )}
  >
    <IconCheckXXLRound />
    <h2 className="banner__title">Study Completed</h2>
    <div className="banner__text">
      Congratulations! You have completed all of your flashcards for today.
      Check back tomorrow for more study material.
    </div>
  </div>
);

BannerCompleted.displayName = 'Study Completed Banner';

export default BannerCompleted;
