import { useParams, useNavigate } from 'react-router-dom';

import { Page, BackNav } from 'components';
import { ConfigureCard } from 'features';

const SearchAdd = () => {
  const { definitionId } = useParams();
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <Page>
      <BackNav title="Back to search" onClick={handleClick} />
      <ConfigureCard definitionId={definitionId} />
    </Page>
  );
};

SearchAdd.displayName = 'Search Details Page';

export default SearchAdd;
