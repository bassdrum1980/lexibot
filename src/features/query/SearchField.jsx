import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { Input } from 'components';
import { selectQuery, setQuery } from './query-slice';
import { fetchFreeDictionary } from '../freedictionary/freedictionary-slice';

const SearchField = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  // update query
  // initiate request to the free dictionary
  const onSearch = (e) => {
    const { target: { value } } = e;
    dispatch(setQuery(value));
    dispatch(fetchFreeDictionary(value));
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
      placeholder="Search Free Dictionary"
      className="form-input--rounded form-input--font-ui"
    />
  );
};

SearchField.displayName = 'SearchField';

export default SearchField;
