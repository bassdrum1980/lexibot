import { Success, Week } from 'components';
import IconStar from 'svg/IconStar';
import './index.scss';

const StudyDone = () => {
  return (
    <Success
      primaryText="Done for Today"
      secondaryText="Way to go! Come back tomorrow!"
      handleClose={() => null}
    >
      <div className="study-done">
        <div className="study-done__week-stats">
          <Week stats={[20, 12, 34, 11, 9, 31, 17]} />
        </div>
        <div className="study-done__streak">
          <h4>
            <IconStar fill="var(--flame1000)" width="24" height="24" />
            <span>15X STREAK</span>
          </h4>
          <p>Your best streak so far!</p>
        </div>
      </div>
    </Success>
  );
};

StudyDone.displayName = 'Study Done';
export default StudyDone;
