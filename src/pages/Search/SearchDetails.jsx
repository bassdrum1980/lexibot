import { useParams } from 'react-router-dom';

import { Page, FormHeader } from 'components';

const SearchAdd = () => {
  const { definitionId } = useParams();
  
  return (
    <Page>
      {definitionId}

      <FormHeader
        title="Back to search"
        onClick={() => console.log('back')}
      />
    </Page>
  );
};

SearchAdd.displayName = 'Search Add Page';

export default SearchAdd;
