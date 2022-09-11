import { useSelector, useDispatch } from 'react-redux';
import { selectDictionaryEntries } from 'features';
import { Card, Cards } from 'components';

const SearchResults = () => {
  // я беру результаты из слайса
  const results = useSelector(selectDictionaryEntries);
  // я создаю обработчик на выбор результата
  // я беру компонент результат и рендерю аутпут
  return (
    <Cards>
      {results.map(result => (
        <Card entry={result} />
      ))}
    </Cards>
  )
};

SearchResults.displayName = 'Search Results';
export default SearchResults;
