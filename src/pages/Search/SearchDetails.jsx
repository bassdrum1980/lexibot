import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Page, BackNav, Success } from 'components';
import { ConfigureCard } from 'features';
import {
  resetCurrentDefinitionId,
  postCard,
  selectCardPosted,
} from '../../features/freedictionary/freedictionary-slice';

const SearchDetails = () => {
  const dispatch = useDispatch();

  // handle back to search
  const handleBack = useCallback(() => {
    dispatch(resetCurrentDefinitionId());
  }, []);

  // handle card submit
  const handleSubmit = useCallback((card) => {
    dispatch(postCard(card));
  }, []);

  // if card has just been posted -- show successs
  const isCardPosted = useSelector(selectCardPosted);

  return (
    <Page>
      {isCardPosted && <Success>Card has been saved!</Success>}
      {!isCardPosted && (
        <>
          <BackNav title="Back to search" onClick={handleBack} />
          <ConfigureCard handleSubmit={handleSubmit} />
        </>
      )}
    </Page>
  );
};

SearchDetails.displayName = 'Search Details Page';

export default SearchDetails;
