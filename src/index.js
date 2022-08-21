import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import Search from './pages/Search';
import Study from './pages/Study';
import References from './pages/_references';
import 'styles/index.scss';

import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="search" element={<Search />} />
          <Route path="study" element={<Study />} />
          <Route path="references" element={<References />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
