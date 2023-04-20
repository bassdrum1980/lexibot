import { Button } from 'components';
import IconPlusPrimary from 'svg/IconPlusPrimary';
import './index.scss';

const SearchSuccessContent = ({ totalCards, handleOneMore }) => (
  <div className="search-success-content">
    <p>{totalCards} cards have been added so far!</p>
    <Button
      className="search-success-content__button"
      type="button"
      btnStyle="plain"
      width="hug"
      onClick={handleOneMore}
    >
      <IconPlusPrimary />
      <span>
        Care to add one
        <br />
        more?
      </span>
    </Button>
  </div>
);

SearchSuccessContent.displayName = 'Add Card Success Page Content';

export default SearchSuccessContent;