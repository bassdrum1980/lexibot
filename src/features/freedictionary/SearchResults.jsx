import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDictionaryMeanings } from 'features';
import { Card, Cards } from 'components';

const SearchResults = () => {
  // Get meanings from the slice
  const meanings = useSelector(selectDictionaryMeanings);
  // A handler, let's user proceed to details page
  const navigate = useNavigate();
  const handleOnClick = (definition) => navigate(definition.id);

  return (
    <Cards>
      {meanings.map((item) => (
        <Card
          key={item.id}
          meaning={item}
          handleOnClick={handleOnClick}
        />
      ))}
    </Cards>
  );
};

SearchResults.displayName = 'Search Results';
export default SearchResults;
