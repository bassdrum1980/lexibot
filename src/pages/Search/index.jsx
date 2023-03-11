import { useSelector } from 'react-redux';

import SearchDetails from './SearchDetails';
import SearchIndex from './SearchIndex';
import { selectDictonaryCurrentId } from '../../features/freedictionary/freedictionary-slice';

const Search = () => {
  const currentDefinitionId = useSelector(selectDictonaryCurrentId);

  return currentDefinitionId ? <SearchDetails /> : <SearchIndex />;
};

Search.displayName = 'Search Root Page';

export default Search;
