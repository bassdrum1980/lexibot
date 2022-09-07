import { Page } from 'components';
import { SearchField, selectDictionaryEntries } from 'features';
import { useSelector } from 'react-redux';

// берет из стора значение, есть ли результаты

const Search = () => {
  const results = useSelector(selectDictionaryEntries);

  return (
    <Page className={
      `page--search page--narrow-padding ${!results.length ? 'page--align-bottom' : ''}`
    }
    >
      <p>This is a search page</p>
      <SearchField />
    </Page>
  );
};

Search.displayName = 'Search Page';

export default Search;
