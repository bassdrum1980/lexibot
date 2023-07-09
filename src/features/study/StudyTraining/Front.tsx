import { Pill, Controls, Button } from 'components';
import IconHintXL from 'svg/IconHintXL';
import IconAudioXL from 'svg/IconAudioXL';

type FrontType = {
  handleFlip: () => void;
};

const Front: React.FC<FrontType> = ({ handleFlip }) => {
  return (
    <>
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
            onClick={handleFlip}
          >
            Show Answer
          </Button>
        </Controls>
      </div>
    </>
  );
};

Front.displayName = 'Card Front';
export default Front;
