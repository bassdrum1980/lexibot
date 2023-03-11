import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Page, BackNav } from 'components';
import { ConfigureCard } from 'features';
import {
  resetCurrentDefinitionId,
  postCard,
} from '../../features/freedictionary/freedictionary-slice';

const SearchDetails = () => {
  // handle back to search
  const dispatch = useDispatch();
  const handleBack = useCallback(() => {
    dispatch(resetCurrentDefinitionId());
  }, []);
  const handleSubmit = useCallback((card) => {
    dispatch(postCard(card));
  }, []);

  return (
    <Page>
      <BackNav title="Back to search" onClick={handleBack} />
      <ConfigureCard handleSubmit={handleSubmit} />
    </Page>
  );
};

SearchDetails.displayName = 'Search Details Page';

export default SearchDetails;
