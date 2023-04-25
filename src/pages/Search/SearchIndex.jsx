import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import SearchField from 'features/query/SearchField';
import SearchResults from 'features/freedictionary/SearchResults';
import { selectDictionaryMeanings } from 'features/freedictionary/freedictionary-slice';
import { Page } from 'components';

import { signOut } from 'features/user/user-slice';

const SearchIndex = () => {
  const results = useSelector(selectDictionaryMeanings);
  const dispatch = useDispatch();

  return (
    <Page
      className={classnames('page--search', 'page--narrow-padding', {
        'page--align-bottom': !results.length,
      })}
    >
      <SearchField />
      {Boolean(results.length) && <SearchResults />}
      <button
        onClick={() => {
          dispatch(signOut());
        }}
      >
        Sign out
      </button>
    </Page>
  );
};

SearchIndex.displayName = 'Search Start/Results Page';

export default SearchIndex;
