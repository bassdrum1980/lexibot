import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal, Warning } from 'components';
import { resetUserSignedUp } from 'features/loading/loading-slice';
import { signinURL } from '../../routing.js';

const SignUpSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`/${signinURL}`);
    dispatch(resetUserSignedUp());
  };

  return (
    <Modal>
      <Warning
        className="warning--info"
        title="Signup Email Sent"
        message="Activation email has been sent. Follow the instructions to activate your account."
        onClick={handleClose}
        buttonText="Close"
      />
    </Modal>
  );
};

SignUpSuccess.displayName = 'Sign Up Success Dialog';

export default SignUpSuccess;
