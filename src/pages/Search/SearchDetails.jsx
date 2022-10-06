import { useParams, useNavigate } from 'react-router-dom';

import {
  Page, BackNav, PageActions, Button,
} from 'components';
import { ConfigureCard } from 'features';

const SearchAdd = () => {
  const { definitionId } = useParams();
  const navigate = useNavigate();
  const onClick = () => navigate(-1);

  return (
    <Page>
      <BackNav
        title="Back to search"
        onClick={onClick}
      />
      <ConfigureCard
        definitionId={definitionId}
      />
      <PageActions>
        <Button
          type="submit"
          size="m"
          btnStyle="primary"
          width="fill"
          onClick={() => true}
        >
          Save Card
        </Button>
      </PageActions>
    </Page>
  );
};

SearchAdd.displayName = 'Search Add Page';

export default SearchAdd;
