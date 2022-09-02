import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testTgID } from 'config';
import { fetchUser, selectLoading } from './user-slice';

const UserLoader = ({ children }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchUser(testTgID));
  }, []);

  if (loading === 'loading') return (<span>Loading ...</span>);
  if (error) return (<span>{error}</span>);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};

UserLoader.displayName = 'UserLoader';

export default UserLoader;
