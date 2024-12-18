import classnames from 'classnames';
import { Button } from 'components';
import IconClock from 'svg/IconClock';
import './index.scss';

type BannerType = {
  name: string;
  cardsTotal: number;
  className?: string | string[];
  handleClick?: () => void;
};

export const Banner: React.FC<BannerType> = ({
  name,
  cardsTotal,
  className,
  handleClick,
}) => (
  <div
    className={classnames(
      'banner',
      Array.isArray(className) ? className.join(' ') : className
    )}
  >
    <div className="banner__title">
      <h2 data-testid="welcome">Hey {name}!</h2>
      <p data-testid="cards-total">
        There are {cardsTotal} cards in the queue.
      </p>
    </div>
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
      onClick={handleClick}
    >
      Study
    </Button>
  </div>
);
