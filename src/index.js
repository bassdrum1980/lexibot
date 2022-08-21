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
import * as routes from './routing';
import 'styles/index.scss';

import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={routes.searchURL} element={<Search />} />
          <Route path={routes.studyURL} element={<Study />} />
          <Route path={routes.referencesURL} element={<References />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
