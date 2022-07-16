import { useState } from 'react';
import { Spinner, Button, Week, Pill, Progress } from 'components';

const App = () => {
  const [progress, setProgress] = useState(20);

  return (
    <div>
      <Spinner />
      <Week stats={[20, 12, 34, 11, 9, 31, 17]} />
      <hr />
      <Pill type="noun">noun</Pill>
      <br />
      <Pill type="pronoun">pronoun</Pill>
      <br />
      <Pill type="interjection">interjection</Pill>
      <br />
      <Pill type="preposition">preposition</Pill>
      <br />
      <Pill type="conjunction">conjunction</Pill>
      <br />
      <Pill type="verb">verb</Pill>
      <br />
      <Pill type="adverb">adverb</Pill>
      <br />
      <Pill type="adjective">adjective</Pill>
      <br />
      <Pill type="various">photography</Pill>
      ,
      <Pill type="various">optics</Pill>
      <div style={{ backgroundColor: '#136FD1', padding: '10px 16px' }}>
        <Progress progress={progress} />
      </div>
      <Button
        className={['xl', 'active']}
        onClick={() => setProgress(Math.random() * 100)}
      >
        Click me for progress!
      </Button>
    </div>
  );
};

export default App;
