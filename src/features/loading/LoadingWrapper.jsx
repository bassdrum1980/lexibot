import { useSelector } from 'react-redux';

import { Modal, Warning, Spinner } from 'components';
import { selectError, selectLoading } from 'features';

const LoadingWrapper = ({ children }) => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  if (loading === 'loading') {
    return (
      <Modal>
        <Spinner />
      </Modal>
    );
  }

  if (error) {
    return (
      <Modal>
        <Warning
          className="warning--error"
          title={error}
          message={'Looks like something unexpected\njust has happened...'}
          onClick={() => console.log('click')}
        />
      </Modal>
    );
  }

  return children;
};

LoadingWrapper.displayName = 'LoadingWrapper';

export default LoadingWrapper;
