import { useSelector } from 'react-redux';

import { Success } from 'components';
import SearchDetails from './SearchDetails';
import SearchIndex from './SearchIndex';
import {
  selectDictonaryCurrentId,
  selectCardPosted,
} from '../../features/freedictionary/freedictionary-slice';

const Search = () => {
  const currentDefinitionId = useSelector(selectDictonaryCurrentId);
  const isCardPosted = useSelector(selectCardPosted);

  // if card has just been posted — show success
  if (isCardPosted) {
    return <Success>Card has been saved!</Success>;
  }

  // if there is an active definition, show details
  if (currentDefinitionId) return <SearchDetails />;

  // otherwise, show the search itself
  return <SearchIndex />;
};

Search.displayName = 'Search Root Page';

export default Search;
