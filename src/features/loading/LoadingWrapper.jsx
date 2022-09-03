import { Modal, Warning, Spinner } from 'components';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from './loading-slice';

const LoadingWrapper = ({ children }) => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  return (
    <>
      {error
        && (
        <Modal>
          <Warning
            className="warning--error"
            title={error}
            message={'Looks like something unexpected\njust has happened...'}
            onClick={() => console.log('click')}
          />
        </Modal>
        )}
      {loading === 'loading'
        && (
        <Modal>
          <Spinner />
        </Modal>
        )}
      { children }
    </>
  );
};

LoadingWrapper.displayName = 'LoadingWrapper';

export default LoadingWrapper;
