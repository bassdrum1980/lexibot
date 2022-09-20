import { useSelector } from 'react-redux';
import classnames from 'classnames';

import { SearchField, SearchResults, selectDictionaryMeanings } from 'features';
import { Page } from 'components';

const SearchIndex = () => {
  const results = useSelector(selectDictionaryMeanings);

  return (
    <Page className={
        classnames(
          'page--search',
          'page--narrow-padding',
          { 'page--align-bottom': !results.length },
        )
        }
    >
      <SearchField />
      {Boolean(results.length) && <SearchResults />}
    </Page>
  );
};

SearchIndex.displayName = 'Search Start/Results Page';

export default SearchIndex;
