import { SearchField } from 'features';
import { Icon } from 'components';

const Search = () => (
  <>
    <p>This is a search page</p>
    <SearchField />
    <Icon
      name="search"
      size="32"
      fillColor="var(--gray1000)"
    />
  </>
);

Search.displayName = 'Search Page';

export default Search;
