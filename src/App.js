import { useRef, useEffect, useState } from 'react';
import { Button, Textarea } from 'components';

const App = () => {
  const [value, setValue] = useState('');

  const btnRef = useRef(null);
  useEffect(() => console.log(btnRef), []);

  return (
    <div>
      <Button className={['xl', 'active']} ref={btnRef}>Click me</Button>
      <Textarea name="textarea" onChange={(e) => setValue(e.target.value)} value={value} />
    </div>
  );
};

export default App;
