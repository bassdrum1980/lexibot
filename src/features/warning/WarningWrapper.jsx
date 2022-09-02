import { Warning } from 'components';
import { useSelector } from 'react-redux';
import { selectWarning } from './warning-slice';

const WarningWrapper = ({ children }) => {
  const error = useSelector(selectWarning);

  return (
    <>
      {error
        && (
        <Warning
          className="warning--error"
          title={error}
          message={'Looks like something unexpected\njust has happened...'}
          onClick={() => console.log('click')}
        />
        )}
      { children }
    </>
  );
};

WarningWrapper.displayName = 'WarningWrapper';

export default WarningWrapper;
