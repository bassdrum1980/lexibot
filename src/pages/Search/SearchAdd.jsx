import { Page } from 'components';
import { useParams } from 'react-router-dom';

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
