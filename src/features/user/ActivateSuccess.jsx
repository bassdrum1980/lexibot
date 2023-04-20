import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal, Warning } from 'components';
import { resetUserActivated } from 'features/loading/loading-slice';
import { signinURL } from '../../routing.js';

const ActivateSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`/${signinURL}`);
    dispatch(resetUserActivated());
  };

  return (
    <Modal>
      <Warning
        className="warning--info"
        title="Account Activated"
        message="Your account has been activated. You can now sign in."
        onClick={handleClose}
        buttonText="Close"
      />
    </Modal>
  );
};

ActivateSuccess.displayName = 'Activate Success Dialog';

export default ActivateSuccess;
