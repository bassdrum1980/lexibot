import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { decodeJwt } from 'jose';
import ActivateForm from 'features/user/ActivateForm';
import ActivateSuccess from 'features/user/ActivateSuccess';
import { Page } from 'components';
import { activateAccount } from 'features/user/user-slice-actions';
import { selectUserActivated } from 'features/loading/loading-slice';

const Activate = () => {
  const { token } = useParams();
  const { firstName } = decodeJwt(token);
  const isUserActivated = useSelector(selectUserActivated);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(activateAccount({ token }));
  };

  return (
    <Page>
      {isUserActivated ? (
        <ActivateSuccess />
      ) : (
        <ActivateForm
          handleSubmit={handleSubmit}
          firstName={firstName}
        />
      )}
    </Page>
  );
};

Activate.displayName = 'Activate Account Page';

export default Activate;
