import { Page } from 'components';
import { SearchField, SearchResults, selectDictionaryMeanings } from 'features';
import { useSelector } from 'react-redux';

const Search = () => {
  const results = useSelector(selectDictionaryMeanings);

  return (
    <Page className={
      `page--search page--narrow-padding ${!results.length ? 'page--align-bottom' : ''}`
    }
    >
      <SearchField />
      {results.length !== 0 && <SearchResults />}
    </Page>
  );
};

Search.displayName = 'Search Page';

export default Search;
