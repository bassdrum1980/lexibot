import { useRef, useEffect, useState } from 'react';
import {
  Spinner, Button, Week, Pill, Progress, Input, Textarea, Icon,
} from 'components';

const App = () => {
  const [progress, setProgress] = useState(20);
  const [input01, setInput01] = useState('traitorous');
  const [input02, setInput02] = useState('coercion');
  const [input03, setInput03] = useState('');
  const btnRef = useRef(null);
  useEffect(() => console.log(btnRef), []);

  return (
    <div>
      <Icon
        name="mic"
        size={24}
        color="red"
      />
      <Icon
        name="mic"
        size={48}
        color="blue"
      />
      <div className="form-control">
        <Input
          onChange={(e) => setInput01(e.target.value)}
          placeholder="type smth"
          value={input01}
          name="input1"
          className="form-input"
        />
      </div>
      <div className="form-control">
        <Input
          onChange={(e) => setInput02(e.target.value)}
          placeholder="type smth"
          value={input02}
          isValid={false}
          name="input1"
          className="form-input"
        />
      </div>
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
        ref={btnRef}
      >
        Click me for progress!
      </Button>
      <Textarea name="textarea" onChange={(e) => setInput03(e.target.value)} value={input03} />
    </div>
  );
};

export default App;
