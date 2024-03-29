import classnames from 'classnames';
import debounce from 'lodash/debounce';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect } from 'react';

import { InputWithAction } from 'components';
import { fetchFreeDictionary } from 'features/freedictionary/freedictionary-slice';
import { selectQuery, setQuery } from 'features/query/query-slice';
import IconSearch from 'svg/IconSearch';

const SearchField = ({ className }) => {
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
    <form
      onSubmit={onSubmit}
      autoComplete="off"
      className={classnames(
        Array.isArray(className) ? className.join(' ') : className
      )}
    >
      <InputWithAction
        name="searchField"
        type="text"
        placeholder="Search Free Dictionary"
        defaultValue={query}
        className="form-input--rounded form-input--font-ui form-input--noborder form-input--white form-input--bold"
        onChange={debouncedOnChange}
      >
        <IconSearch />
      </InputWithAction>
    </form>
  );
};

SearchField.displayName = 'SearchField';

export default SearchField;
