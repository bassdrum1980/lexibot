import { useRef, useEffect } from 'react';
import { Button } from 'components';

const App = () => {
  const btnRef = useRef(null);
  useEffect(() => console.log(btnRef), []);

  return (
    <div>
      <Button className={['xl', 'active']} ref={btnRef}>Click me</Button>
    </div>
  )
};

export default App;
