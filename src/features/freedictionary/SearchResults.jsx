import { useSelector, useDispatch } from 'react-redux';
import { selectDictionaryMeanings } from 'features';
import { Card, Cards } from 'components';

const SearchResults = () => {
  // Get meanings from the slice
  const meanings = useSelector(selectDictionaryMeanings);
  // A handler, let's user proceed to details page
  const handleOnClick = (definition) => {
    console.log(definition);
  };

  return (
    <Cards>
      {meanings.map((item) => (
        <Card
          meaning={item}
          handleOnClick={handleOnClick}
        />
      ))}
    </Cards>
  );
};

SearchResults.displayName = 'Search Results';
export default SearchResults;
