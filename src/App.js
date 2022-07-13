import { useState } from 'react';
import { Button, Progress } from 'components';

const App = () => {
  const [progress, setProgress] = useState(20);

  return (
    <div>
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
