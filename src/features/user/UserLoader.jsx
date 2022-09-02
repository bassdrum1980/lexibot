import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testTgID } from 'config';
import { fetchUser, selectLoading } from './user-slice';

const UserLoader = ({ children }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchUser(testTgID));
  }, []);

  if (loading === 'loading') return (<span>Loading ...</span>);

  return (
    children
  );
};

UserLoader.displayName = 'UserLoader';

export default UserLoader;
