import { useState } from 'react';
import { Progress, Pill, Controls, Button, ButtonLegend } from 'components';
import IconHintXL from 'svg/IconHintXL';
import IconAudioXL from 'svg/IconAudioXL';
import IconDots from 'svg/IconDots';
import IconCheck from 'svg/IconCheck';
import IconPlus from 'svg/IconPlus';
import './index.scss';

const StudyTraining = () => {
  const [isFront, setIsFront] = useState(true);
  const [isMore, setIsMore] = useState(false);

  const handleMore = () => {
    setIsMore(true);
  };

  const handleFlip = () => {
    setIsFront(false);
  };

  const front = (
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

  const back = (
    <>
      <div className="study-training__body study-training__back">
        <div className="study-training__back__header">
          <Pill type="default">noun</Pill>
          <div className="study-training__back__word">coercion</div>
          <div className="study-training__back__header__nav">
            <IconDots />
          </div>
        </div>
        <div className="study-training__back__content">
          <div className="study-training__back__definition">
            the practice of persuading someone to do something by using force
          </div>
          {isMore && (
            <div className="study-training__back__example">
              <span>
                our problem cannot be solved by any form of coercion but only by
                agreement
              </span>
            </div>
          )}
        </div>
        <div className="study-training__back__footer">
          {isMore && (
            <div className="study-training__back__thesaurus">
              <div className="study-training__back__thesaurus__synonym">
                <IconCheck />
                <span>persuasion</span>
              </div>
              <div className="study-training__back__thesaurus__antonym">
                <IconPlus isRound={false} />
                <span>oppression</span>
              </div>
            </div>
          )}
          {!isMore && (
            <Button
              type="button"
              btnStyle="plain"
              width="fill"
              className="study-training__back__btn-more"
              onClick={handleMore}
            >
              tap to see more
            </Button>
          )}
        </div>
      </div>
      <div className="study-training__footer">
        <Controls className="controls--narrow controls--row">
          <ButtonLegend
            btnStyle="tertiary"
            legend="~1 min"
            width="fill"
            onClick={() => null}
          >
            Fail
          </ButtonLegend>
          <ButtonLegend
            btnStyle="tertiary"
            legend="1 day"
            width="fill"
            onClick={() => null}
          >
            Hard
          </ButtonLegend>
          <ButtonLegend
            btnStyle="tertiary"
            legend="2 days"
            width="fill"
            onClick={() => null}
          >
            Good
          </ButtonLegend>
          <ButtonLegend
            btnStyle="tertiary"
            legend="4 days"
            width="fill"
            onClick={() => null}
          >
            Easy
          </ButtonLegend>
        </Controls>
      </div>
    </>
  );

  const content = isFront ? front : back;

  return (
    <div className="study-training">
      <div className="study-training__header">
        <div className="study-training__progress">
          <Progress progress={20} />
        </div>
      </div>
      {content}
    </div>
  );
};

StudyTraining.displayName = 'Study Training Dialog';
export default StudyTraining;
