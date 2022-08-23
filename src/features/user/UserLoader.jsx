import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testTgID } from 'config/telegram';
import { fetchUser, selectLoading, selectUser } from './user-slice';

const UserLoader = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { loading, error } = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchUser(testTgID));
  }, []);

  return (
    <>
      {loading === 'loading' && <span>Loading ...</span>}
      {error && <span>{error}</span>}
      {loading === 'idle'
        && !error
        && user
        && { ...children }}
    </>
  );
};

UserLoader.displayName = 'UserLoader';

export default UserLoader;
