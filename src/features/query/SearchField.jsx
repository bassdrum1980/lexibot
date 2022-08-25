import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { Input } from 'components';
import { selectQuery, setQuery } from './query-slice';

const SearchField = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const onSearch = (e) => {
    const { target: { value } } = e;
    dispatch(setQuery(value));
  };

  // Memoize the debounced function
  const debouncedOnSearch = useMemo(() => debounce(onSearch, 300), []);

  // Stop the invocation of the debounced function
  // after unmounting
  useEffect(() => () => {
    debouncedOnSearch.cancel();
  }, []);

  return (
    <Input
      type="text"
      onChange={debouncedOnSearch}
      defaultValue={query}
    />
  );
};

SearchField.displayName = 'SearchField';

export default SearchField;
