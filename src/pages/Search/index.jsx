import { Routes, Route } from 'react-router-dom';

import SearchAdd from './SearchAdd';
import SearchIndex from './SearchIndex';

const Search = () => (
  <Routes>
    <Route path="/" element={<SearchIndex />} />
    <Route path=":definitionId" element={<SearchAdd />} />
  </Routes>
);

Search.displayName = 'Search Root Page';

export default Search;
