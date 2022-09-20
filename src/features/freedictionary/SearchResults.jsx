/**
 * The component renders a list of Cards,
 * one Card per 'meaning'.
*/

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectDictionaryMeanings } from 'features';
import { Card, Cards } from 'components';

const SearchResults = () => {
  // get meanings from the slice
  const meanings = useSelector(selectDictionaryMeanings);
  // handler to proceed to details page
  const navigate = useNavigate();
  const handleOnClick = (id) => navigate(id);

  return (
    <Cards>
      {meanings.map(({ id, ...rest }) => (
        <Card
          key={id}
          meaning={rest}
          handleOnClick={handleOnClick}
        />
      ))}
    </Cards>
  );
};

SearchResults.displayName = 'Search Results';
export default SearchResults;
