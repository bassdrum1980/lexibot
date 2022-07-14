import { useRef, useEffect } from 'react';
import { Button, Week } from 'components';

const App = () => {
  const btnRef = useRef(null);
  useEffect(() => console.log(btnRef), []);

  return (
    <div>
      <Button className={['xl', 'active']} ref={btnRef}>Click me</Button>
      <Week stats={[20, 12, 34, 11, 9, 31, 17]} />
    </div>
  );
};

export default App;
