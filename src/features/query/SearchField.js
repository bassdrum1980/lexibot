import { Input } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuery, setQuery } from './query-slice';

const SearchField = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  return (
    <Input
      type="text"
      onChange={(e) => dispatch(setQuery(e.target.value))}
      value={query}
    />
  );
};

SearchField.displayName = 'SearchField';

export default SearchField;
