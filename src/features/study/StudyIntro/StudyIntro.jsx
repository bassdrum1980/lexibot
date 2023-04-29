import { Controls, Button } from 'components';
import IconClock from 'svg/IconClock';
import './index.scss';

const StudyIntro = () => {
  return (
    <div className="study-intro">
      <div className="study-intro__body">
        <div className="study-intro__total">
          <div className="study-intro__total__wrapper">
            <h1>18</h1>
            <p>Total cards today</p>
          </div>
        </div>
        <div className="study-intro__estimated">
          <IconClock />
          <span>5-7 minutes</span>
        </div>
      </div>
      <div className="study-intro__footer">
        <Controls className="controls--plain">
          <Button
            type="submit"
            size="m"
            btnStyle="secondary"
            width="fill"
            onClick={() => null}
          >
            Start
          </Button>
        </Controls>
      </div>
    </div>
  );
};

StudyIntro.displayName = 'Study Intro';
export default StudyIntro;
