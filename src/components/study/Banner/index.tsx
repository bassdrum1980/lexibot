import classnames from 'classnames';
import IconClock from 'svg/IconClock';
import { Button } from 'components';
import './index.scss';

type BannerType = {
  className?: string | string[];
};

const Banner: React.FC<BannerType> = ({ className }) => (
  <div
    className={classnames(
      'banner',
      Array.isArray(className) ? className.join(' ') : className
    )}
  >
    <h2 className="banner__title">
      Hey Alexander!
      <br />
      There are 20 cards in the queue.
    </h2>
    <div className="banner__text">
      <div className="banner__text__estimated">
        <IconClock fill="var(--gray700)" />
        It will take 5-7 minutes
      </div>
    </div>
    <Button
      className="banner__button"
      btnStyle="tertiary"
      width="hug"
      onClick={() => console.log('Study')}
    >
      Study
    </Button>
  </div>
);

Banner.displayName = 'Study Banner';

export default Banner;
