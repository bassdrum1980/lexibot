import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { Success } from 'components';
import SearchDetails from './SearchDetails';
import SearchIndex from './SearchIndex';
import {
  selectDictonaryCurrentId,
  selectCardPosted,
  resetCardPosted,
} from '../../features/freedictionary/freedictionary-slice';

const Search = () => {
  const currentDefinitionId = useSelector(selectDictonaryCurrentId);
  const isCardPosted = useSelector(selectCardPosted);
  const dispatch = useDispatch();

  const handleSuccessClose = useCallback(() => {
    dispatch(resetCardPosted());
  }, []);

  // if card has just been posted - show Success
  if (isCardPosted) return <Success handleClose={handleSuccessClose} />;

  // if there is an active definition - Details
  if (currentDefinitionId) return <SearchDetails />;

  // otherwise - Search
  return <SearchIndex />;
};

Search.displayName = 'Search Root Page';

export default Search;
