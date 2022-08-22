import { Input } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuery, setQuery } from './query-slice';

const SearchField = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const onSearch = (e) => {
    const { target: { value } } = e;
    dispatch(setQuery(value));
  };

  return (
    <Input
      type="text"
      onChange={onSearch}
      value={query}
    />
  );
};

SearchField.displayName = 'SearchField';

export default SearchField;
