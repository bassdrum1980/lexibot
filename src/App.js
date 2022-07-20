import { useRef, useEffect, useState } from 'react';
import {
  Spinner, Button, Week, Pill, Progress, Input, Textarea, Icon, FormGroup,
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
      <FormGroup>
        <label htmlFor="inputWord">Word</label>
        <Input
          name="inputWord"
          onChange={(e) => setInputWord(e.target.value)}
          placeholder="type smth"
          value={inputWord}
        />
      </FormGroup>
      <FormGroup
        isRequired
        note="Required"
        isValid={false}
      >
        <label htmlFor="inputThesaurus">Thesaurus</label>
        <Input
          name="inputThesaurus"
          onChange={(e) => setInputThesaurus(e.target.value)}
          placeholder="type smth"
          value={inputThesaurus}
          isValid={false}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="inputDefinition">Definition</label>
        <Textarea
          name="inputDefinition"
          onChange={(e) => setInputDefinition(e.target.value)}
          placeholder="type smth"
          value={inputDefinition}
        />
      </FormGroup>
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
      <Button
        className={['xl', 'active']}
        onClick={() => setProgress(Math.random() * 100)}
        ref={btnRef}
      >
        Click me for progress!
      </Button>
    </div>
  );
};

export default App;
