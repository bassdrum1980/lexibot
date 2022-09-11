import { Page } from 'components';
import { SearchField, selectDictionaryEntries } from 'features';
import { useSelector } from 'react-redux';

const Search = () => {
  const results = useSelector(selectDictionaryEntries);

  return (
    <Page className={
      `page--search page--narrow-padding ${!results.length ? 'page--align-bottom' : ''}`
    }
    >
      <SearchField />
    </Page>
  );
};

Search.displayName = 'Search Page';

export default Search;
