import { useRef, useEffect, useState } from 'react';
import {
  Spinner, Button, Week, Pill, Progress, Input, Textarea, Icon,
} from 'components';

const App = () => {
  const [progress, setProgress] = useState(20);
  const [inputWord, setInputWord] = useState('traitorous');
  const [inputThesaurus, setInputThesaurus] = useState('coercion');
  const [inputDefinition, setInputDefinition] = useState('');
  const btnRef = useRef(null);
  useEffect(() => console.log(btnRef), []);

  return (
    <div>
      <Input
        name="inputWord"
        id="inputWord"
        placeholder="type smth"
        value={inputWord}
        isRequired
        isValid={false}
        label="word"
        validationText="required"
        onChange={(e) => setInputWord(e.target.value)}
      />
      <Input
        name="inputThesaurus"
        id="inputThesaurus"
        placeholder="type smth"
        value={inputThesaurus}
        isRequired
        label="thesaurus"
        validationText="required"
        onChange={(e) => setInputThesaurus(e.target.value)}
      />
      <Textarea
        name="inputDefinition"
        id="inputDefinition"
        placeholder="type smth"
        value={inputDefinition}
        label="definition"
        onChange={(e) => setInputDefinition(e.target.value)}
      />
      <Button
        btnStyle="primary"
        onClick={() => setProgress(Math.random() * 100)}
        ref={btnRef}
      >
        Click me for progress!
      </Button>
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
    </div>
  );
};

export default App;
