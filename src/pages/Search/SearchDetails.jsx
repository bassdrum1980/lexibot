import { useParams, useNavigate } from 'react-router-dom';

import { Page, FormHeader } from 'components';
import { ConfigureCard } from 'features';

const SearchAdd = () => {
  const { definitionId } = useParams();
  const navigate = useNavigate();
  const onClick = () => navigate(-1);

  return (
    <Page>
      <FormHeader
        title="Back to search"
        onClick={onClick}
      />
      <ConfigureCard
        definitionId={definitionId}
      />
    </Page>
  );
};

SearchAdd.displayName = 'Search Add Page';

export default SearchAdd;
