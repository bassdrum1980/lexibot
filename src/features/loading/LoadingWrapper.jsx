/**
 * This component wraps around the app,
 * subscribes to the 'loading' slice,
 * shows an appropriate modal window
 * if any async action is in progress
 * or has finished with an error.
 */

import { useSelector } from 'react-redux';

import { Modal, Warning, Spinner } from 'components';
import { selectError, selectLoading } from 'features';

const LoadingWrapper = ({ children }) => {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  // to avoid mount / unmount of children on every change
  // in the 'loading' slice, I always render children +
  // show a necessary modal window if situation calls for it.
  let modal = null;

  if (loading === 'loading') {
    modal = (
      <Modal>
        <Spinner />
      </Modal>
    );
  }

  if (error) {
    modal = (
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

  return (
    <>
      {modal}
      {children}
    </>
  );
};

LoadingWrapper.displayName = 'LoadingWrapper';

export default LoadingWrapper;
