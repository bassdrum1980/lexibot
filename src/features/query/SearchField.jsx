import debounce from 'lodash/debounce';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect } from 'react';

import { InputWithAction } from 'components';
import { fetchFreeDictionary } from 'features/freedictionary/freedictionary-slice';
import { selectQuery, setQuery } from 'features/query/query-slice';

const SearchField = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectQuery);

  const onSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.searchField;
    if (!value) return;
    dispatch(fetchFreeDictionary(value));
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch(setQuery(value));
  };

  // Memoize the debounced function
  const debouncedOnChange = useMemo(() => debounce(onChange, 300), []);

  // Stop the invocation of the debounced function
  // after unmounting
  useEffect(
    () => () => {
      debouncedOnChange.cancel();
    },
    []
  );

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <InputWithAction
        type="text"
        onChange={debouncedOnChange}
        defaultValue={query}
        placeholder="Search Free Dictionary"
        className="form-input--rounded form-input--font-ui form-input--noborder"
        iconName="search"
        name="searchField"
      />
    </form>
  );
};

SearchField.displayName = 'SearchField';

export default SearchField;
