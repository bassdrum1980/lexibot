import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Page } from 'components';
import SignInForm from 'features/user/SignInForm';
import { signIn } from 'features/user/user-slice-actions';
import {
  selectUserSignedIn,
  resetUserSignedIn,
} from 'features/loading/loading-slice';
import { searchURL } from '../../routing';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sign In
  const handleSubmit = (event, data) => {
    event.preventDefault();
    dispatch(signIn(data));
  };

  // Redirect after sign in
  const userSignedIn = useSelector(selectUserSignedIn);

  useEffect(() => {
    if (userSignedIn) {
      dispatch(resetUserSignedIn());
      navigate(`/${searchURL}`);
    }
  }, [userSignedIn, dispatch, navigate]);

  return (
    <Page>
      <SignInForm handleSubmit={handleSubmit} />
    </Page>
  );
};

SignIn.displayName = 'Sign In Page';

export default SignIn;
