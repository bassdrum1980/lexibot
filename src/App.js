import { useRef, useEffect } from 'react';
import { Spinner } from 'components';

const App = () => {
  const btnRef = useRef(null);
  useEffect(() => console.log(btnRef), []);

  return (
    <div>
      <Spinner />
    </div>
  );
};

export default App;
