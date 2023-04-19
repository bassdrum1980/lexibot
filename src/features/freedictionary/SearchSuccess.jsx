import { useDispatch, useSelector } from 'react-redux';

import { Success } from 'components';
import SearchSuccessContent from './SearchSuccessContent';
import { setAddOneMore } from './freedictionary-slice';
import { selectTotalCards } from '../user/user-slice';

const SearchSuccess = () => {
  const dispatch = useDispatch();
  const handleSuccessClose = () => {
    console.log('close the app');
  };

  const handleOneMore = () => {
    dispatch(setAddOneMore());
  };

  const totalCards = useSelector(selectTotalCards);

  return (
    <Success
      primaryText="Done"
      secondaryText="The word has been added!"
      handleClose={handleSuccessClose}
    >
      <SearchSuccessContent
        totalCards={totalCards}
        handleOneMore={handleOneMore}
      />
    </Success>
  );
};

SearchSuccess.displayName = 'Search Success Dialog';

export default SearchSuccess;
