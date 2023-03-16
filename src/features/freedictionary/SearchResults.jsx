/**
 * The component renders a list of Cards,
 * one Card per 'meaning'.
 */

import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import {
  selectDictionaryMeanings,
  setCurrentDefinitionId,
} from 'features/freedictionary/freedictionary-slice';
import { Card, Cards } from 'components';

const SearchResults = () => {
  // get meanings from the slice
  const meanings = useSelector(selectDictionaryMeanings);
  // handler to proceed to details page
  const dispatch = useDispatch();
  const handleClick = useCallback((id) => {
    dispatch(setCurrentDefinitionId(id));
  }, []);

  return (
    <Cards>
      {meanings.map(({ id, ...rest }) => (
        <Card key={id} meaning={rest} handleClick={handleClick} />
      ))}
    </Cards>
  );
};

SearchResults.displayName = 'Search Results';
export default SearchResults;
