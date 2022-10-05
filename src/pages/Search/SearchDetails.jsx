import { useParams, useNavigate } from 'react-router-dom';

import { Page, FormHeader } from 'components';

const SearchAdd = () => {
  const { definitionId } = useParams();
  const navigate = useNavigate();
  const onClick = () => navigate(-1);

  return (
    <Page>
      {definitionId}

      <FormHeader
        title="Back to search"
        onClick={onClick}
      />
    </Page>
  );
};

SearchAdd.displayName = 'Search Add Page';

export default SearchAdd;
