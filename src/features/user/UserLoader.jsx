import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { testTgID } from 'config';
import { fetchUser } from './user-slice';

const UserLoader = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(testTgID));
  }, []);

  return (
    children
  );
};

UserLoader.displayName = 'UserLoader';

export default UserLoader;
