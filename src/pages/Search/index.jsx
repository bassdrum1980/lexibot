import { useSelector } from 'react-redux';

import SearchSuccess from 'features/freedictionary/SearchSuccess';
import {
  selectDictonaryCurrentId,
  selectCardPosted,
} from 'features/freedictionary/freedictionary-slice';
import SearchDetails from './SearchDetails';
import SearchIndex from './SearchIndex';

const Search = () => {
  const currentDefinitionId = useSelector(selectDictonaryCurrentId);
  const isCardPosted = useSelector(selectCardPosted);

  // if card has just been posted - show Success
  if (isCardPosted) return <SearchSuccess />;

  // if there is an active definition - Details
  if (currentDefinitionId) return <SearchDetails />;

  // otherwise - Search
  return <SearchIndex />;
};

Search.displayName = 'Search Root Page';

export default Search;
