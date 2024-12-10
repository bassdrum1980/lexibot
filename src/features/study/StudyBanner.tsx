import classnames from 'classnames';
import { Banner, BannerNothing, BannerCompleted } from 'components';

type StudyBannerProps = {
  className?: string | string[];
  handleStudyClick?: () => void;
};

const StudyBanner: React.FC<StudyBannerProps> = ({
  className,
  handleStudyClick,
}) => {
  // temporary variable to test the different banners
  const banner: string = '';
  let content;

  switch (banner) {
    case 'completed':
      content = <BannerCompleted />;
      break;
    case 'nothing':
      content = <BannerNothing />;
      break;
    default:
      content = (
        <Banner
          name="Alexander"
          cardsTotal={20}
          handleClick={handleStudyClick}
        />
      );
  }

  return (
    <div
      className={classnames(
        Array.isArray(className) ? className.join(' ') : className
      )}
    >
      {content}
    </div>
  );
};

StudyBanner.displayName = 'Study Banner Feature';
export default StudyBanner;
