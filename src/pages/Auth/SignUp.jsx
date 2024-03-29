import { useDispatch, useSelector } from 'react-redux';
import { Page } from 'components';
import SignUpSuccess from 'features/user/SignUpSuccess';
import SignUpForm from 'features/user/SignUpForm';
import { signUp } from 'features/user/user-slice-actions';
import { selectUserSignedUp } from 'features/loading/loading-slice';

const SignUp = () => {
  const dispatch = useDispatch();
  const isUserSignedUp = useSelector(selectUserSignedUp);

  const handleSubmit = (event, data) => {
    event.preventDefault();
    dispatch(signUp(data));
  };

  return (
    <Page>
      {isUserSignedUp ? (
        <SignUpSuccess />
      ) : (
        <SignUpForm handleSubmit={handleSubmit} />
      )}
    </Page>
  );
};

SignUp.displayName = 'Sign Up Page';

export default SignUp;
