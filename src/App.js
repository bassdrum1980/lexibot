import { useRef, useEffect, useState } from 'react';
import { Button, Input } from 'components';

const App = () => {
  const [value, setValue] = useState('');

  const btnRef = useRef(null);
  useEffect(() => console.log(btnRef), []);

  return (
    <div>
      <Button className={['xl', 'active']} ref={btnRef}>Click me</Button>
      <Input onChange={(e) => setValue(e.target.value)} placeholder="type smth" value={value} disabled name="input1" />
      <Input onChange={(e) => setValue(e.target.value)} placeholder="type smth" value={value} name="input2" />
    </div>
  );
};

export default App;
