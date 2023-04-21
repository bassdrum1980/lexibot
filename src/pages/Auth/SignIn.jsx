import { useDispatch } from 'react-redux';
import { Page } from 'components';
import SignInForm from 'features/user/SignInForm';
import { signIn } from 'features/user/user-slice-actions';

const SignIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = (event, data) => {
    event.preventDefault();
    dispatch(signIn(data));
  };

  return (
    <Page>
      <SignInForm handleSubmit={handleSubmit} />
    </Page>
  );
};

SignIn.displayName = 'Sign In Page';

export default SignIn;
