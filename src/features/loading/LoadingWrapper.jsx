/**
 * This component wraps around the app,
 * subscribes to the 'loading' slice,
 * shows an appropriate modal window
 * if any async action is in progress
 * or has finished with an error.
 */

import { useSelector, useDispatch } from 'react-redux';

import { selectError, selectLoading } from 'features/loading/loading-slice';
import { Modal, Warning, Spinner } from 'components';
import { resetError } from './loading-slice';

const LoadingWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  const onResetError = () => {
    dispatch(resetError());
  };

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
          title={error.name}
          message={error.message}
          onClick={onResetError}
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
