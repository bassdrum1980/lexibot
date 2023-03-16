import { useSelector } from 'react-redux';
import classnames from 'classnames';

import SearchField from 'features/query/SearchField';
import SearchResults from 'features/freedictionary/SearchResults';
import { selectDictionaryMeanings } from 'features/freedictionary/freedictionary-slice';
import { Page } from 'components';

const SearchIndex = () => {
  const results = useSelector(selectDictionaryMeanings);

  return (
    <Page
      className={classnames('page--search', 'page--narrow-padding', {
        'page--align-bottom': !results.length,
      })}
    >
      <SearchField />
      {Boolean(results.length) && <SearchResults />}
    </Page>
  );
};

SearchIndex.displayName = 'Search Start/Results Page';

export default SearchIndex;
