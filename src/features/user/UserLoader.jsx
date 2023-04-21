import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from 'features/user/user-slice-actions';
import {
  selectUserSignedOut,
  resetUserSignedOut,
} from 'features/loading/loading-slice';
import { useNavigate } from 'react-router-dom';
import { signinURL } from '../../routing.js';
// import { selectToken } from 'features/user/user-slice';

const UserLoader = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /* Sign Out */
  const isSignedOut = useSelector(selectUserSignedOut);
  useEffect(() => {
    if (isSignedOut) {
      dispatch(resetUserSignedOut());
      navigate(signinURL);
    }
  }, [isSignedOut, navigate]);

  // const token = useSelector(selectToken);

  /*useEffect(() => {
    if (token) {
      dispatch(fetchUser(process.env.TEST_TG_ID));
    }
    if (!token) {
      navigate(signinURL);
    }
  }, [token, navigate]);
*/
  useEffect(() => {
    dispatch(fetchUser(process.env.TEST_TG_ID));
  }, []);

  return children;
};

UserLoader.displayName = 'UserLoader';

export default UserLoader;
