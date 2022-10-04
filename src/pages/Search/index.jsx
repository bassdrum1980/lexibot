import { Routes, Route } from 'react-router-dom';

import SearchDetails from './SearchDetails';
import SearchIndex from './SearchIndex';

const Search = () => (
  <Routes>
    <Route path="/" element={<SearchIndex />} />
    <Route path=":definitionId" element={<SearchDetails />} />
  </Routes>
);

Search.displayName = 'Search Root Page';

export default Search;
