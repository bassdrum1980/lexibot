import { useDispatch } from 'react-redux';

import { Page, BackNav } from 'components';
import ConfigureCard from 'features/freedictionary/ConfigureCard';
import {
  resetCurrentDefinitionId,
  postCard,
} from 'features/freedictionary/freedictionary-slice';

const SearchDetails = () => {
  const dispatch = useDispatch();

  // handle back to search
  const handleBack = () => {
    dispatch(resetCurrentDefinitionId());
  };

  // handle card submit
  const handleSubmit = (card) => {
    dispatch(postCard(card));
  };

  return (
    <Page>
      <BackNav title="Back to search" onClick={handleBack} />
      <ConfigureCard handleSubmit={handleSubmit} />
    </Page>
  );
};

SearchDetails.displayName = 'Search Details Page';

export default SearchDetails;
