import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { Success, SearchSuccessContent } from 'components';
import { resetCardPosted } from './freedictionary-slice';

const SearchSuccess = () => {
  const dispatch = useDispatch();
  const handleSuccessClose = useCallback(() => {
    dispatch(resetCardPosted());
  }, []);

  return (
    <Success
      primaryText="Done"
      secondaryText="The word has been added!"
      handleClose={handleSuccessClose}
    >
      <SearchSuccessContent
        totalCards={754}
        handleOneMore={() => console.log('more')}
      />
    </Success>
  );
};

// внутри саксесс-боди flex
// я передаю туда из серч компонентов вьюху
// она растягивается на весь боди и рендерит свои дела
// все данные и хэндлеры во вьюху идут отсюда

SearchSuccess.displayName = 'Search Success Dialog';

export default SearchSuccess;
