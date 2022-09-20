import { useParams } from 'react-router-dom';

import { Page } from 'components';

const SearchAdd = () => {
  const { definitionId } = useParams();

  return (
    <Page>
      {definitionId}
    </Page>
  );
};

SearchAdd.displayName = 'Search Add Page';

export default SearchAdd;
