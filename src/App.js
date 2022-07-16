import { useRef, useEffect } from 'react';
import { Spinner, Button, Week, Pill } from 'components';

const App = () => {
  const btnRef = useRef(null);
  useEffect(() => console.log(btnRef), []);

  return (
    <div>
      <Button className={['xl', 'active']} ref={btnRef}>Click me</Button>
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
    </div>
  );
};

export default App;
