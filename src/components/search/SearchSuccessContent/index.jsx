import { Icon } from 'components';
import './index.scss';

const SearchSuccessContent = ({ totalCards, handleOneMore }) => (
  <div className="search-success-content">
    <p>{totalCards} cards have been added so far!</p>
    <button
      className="search-success-content__button"
      type="button"
      onClick={handleOneMore}
    >
      <Icon name="plus-primary" size={32} />
      <span>Care to add one more?</span>
    </button>
  </div>
);

SearchSuccessContent.displayName = 'Add Card Success Page Content';

export default SearchSuccessContent;
