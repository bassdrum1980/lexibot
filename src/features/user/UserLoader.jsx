import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUser } from 'features/user/user-slice';

const UserLoader = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser(process.env.TEST_TG_ID));
  }, []);

  return children;
};

UserLoader.displayName = 'UserLoader';

export default UserLoader;
