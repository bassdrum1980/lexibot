import { useState } from 'react';
import { Progress } from 'components';
import Front from './Front';
import Back from './Back';
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

  return (
    <div className="study-training">
      <div className="study-training__header">
        <div className="study-training__progress">
          <Progress progress={20} />
        </div>
      </div>
      {isFront ? (
        <Front handleFlip={handleFlip} />
      ) : (
        <Back
          handleMore={handleMore}
          isMore={isMore}
        />
      )}
    </div>
  );
};

StudyTraining.displayName = 'Study Training Dialog';
export default StudyTraining;
