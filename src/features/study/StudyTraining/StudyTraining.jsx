import { Progress, Pill, Controls, Button } from 'components';
import IconHintXL from 'svg/IconHintXL';
import IconAudioXL from 'svg/IconAudioXL';
import './index.scss';

const StudyTraining = () => {
  return (
    <div className="study-training">
      <div className="study-training__header">
        <div className="study-training__progress">
          <Progress progress={20} />
        </div>
      </div>
      <div className="study-training__body study-training__front">
        <Pill type="default">noun</Pill>
        <div className="study-training__front__word">coercion</div>
        <div className="study-training__front__nav">
          <IconHintXL />
          <IconAudioXL />
        </div>
      </div>
      <div className="study-training__footer">
        <Controls className="controls--narrow">
          <Button
            type="submit"
            size="m"
            btnStyle="tertiary"
            width="fill"
            onClick={() => null}
          >
            Show Answer
          </Button>
        </Controls>
      </div>
    </div>
  );
};

StudyTraining.displayName = 'Study Training Dialog';
export default StudyTraining;
