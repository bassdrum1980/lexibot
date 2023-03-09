import { useSelector } from 'react-redux';

import SearchDetails from './SearchDetails';
import SearchIndex from './SearchIndex';
import { selectDictonaryCurrentId } from '../../features/freedictionary/freedictionary-slice';

const Search = () => {
  const currentDefinitionId = useSelector(selectDictonaryCurrentId);

  const children =
    currentDefinitionId.length > 0 ? <SearchDetails /> : <SearchIndex />;

  return children;
};

Search.displayName = 'Search Root Page';

export default Search;
