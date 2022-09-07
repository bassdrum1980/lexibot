import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect } from 'react';
import debounce from 'lodash/debounce';
import { Input, InputWithAction } from 'components';
import { selectQuery, setQuery, fetchFreeDictionary } from 'features';

const SearchField = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const onSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.searchField;
    dispatch(fetchFreeDictionary(value));
  };

  // update query
  // initiate request to the free dictionary
  const onSearch = (event) => {
    const { target: { value } } = event;
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
    <form onSubmit={onSubmit}>
      <InputWithAction
        type="text"
        onChange={debouncedOnSearch}
        defaultValue={query}
        placeholder="Search Free Dictionary"
        className="form-input--rounded form-input--font-ui"
        iconName="search"
        name="searchField"
      />
    </form>
  );
};

SearchField.displayName = 'SearchField';

export default SearchField;
