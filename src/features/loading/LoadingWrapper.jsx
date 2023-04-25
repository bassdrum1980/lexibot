/**
 * This component wraps around the app,
 * subscribes to the 'loading' slice,
 * shows an appropriate modal window
 * if any async action is in progress
 * or has finished with an error.
 */
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectError, selectLoading } from 'features/loading/loading-slice';
import { Modal, Warning, Spinner } from 'components';
import { resetError, resetInvalidToken } from './loading-slice';
import { selectInvalidToken } from 'features/loading/loading-slice';
import { signinURL } from '../../routing';

const LoadingWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const invalidToken = useSelector(selectInvalidToken);

  // in case of invalid token
  // onResetError is redefined (see the code below)
  let onResetError = () => {
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

  if (error && invalidToken) {
    onResetError = () => {
      dispatch(resetError());
      dispatch(resetInvalidToken());
      navigate(signinURL);
    };
  }

  if (error) {
    modal = (
      <Modal>
        <Warning
          className={`warning--${error.type}`}
          title={error.title}
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
