import { useState } from 'react';
import {
  Spinner, Button, ButtonLegend, Week, Pill, Progress, FormGroup, Input, Textarea, Icon,
} from 'components';

const References = () => {
  const [progress, setProgress] = useState(20);
  const [inputWord, setInputWord] = useState('traitorous');
  const [inputThesaurus, setInputThesaurus] = useState('coercion');
  const [inputDefinition, setInputDefinition] = useState('');

  return (
    <>
      <Input
        type="text"
        placeholder="type smth"
        value={inputWord}
        name="inputWord"
        id="inputWord"
        isValid={false}
        onChange={(e) => setInputWord(e.target.value)}
      />
      <FormGroup
        label="thesaurus"
        validationText="required"
        isRequired
      >
        <Input
          type="text"
          id="inputThesaurus"
          name="inputThesaurus"
          value={inputThesaurus}
          placeholder="type smth"
          onChange={(e) => setInputThesaurus(e.target.value)}
          isValid={false}
        />
      </FormGroup>
      <FormGroup
        label="definition"
      >
        <Textarea
          name="inputDefinition"
          id="inputDefinition"
          value={inputDefinition}
          placeholder="type smth"
          onChange={(e) => setInputDefinition(e.target.value)}
        />
      </FormGroup>
      <Button
        btnStyle="primary"
        onClick={() => setProgress(Math.random() * 100)}
      >
        Click me for progress!
      </Button>
      <ButtonLegend
        btnStyle="legend"
        legend="4 days"
        onClick={() => setProgress(Math.random() * 100)}
      >
        Good
      </ButtonLegend>
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
    </>
  );
};

References.displayName = 'References Page';

export default References;
