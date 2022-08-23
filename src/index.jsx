import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import { UserLoader } from 'features';
import { Search, Study, References } from 'pages';
import App from './App';
import * as routes from './routing';
import { store } from './store';
import 'styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <UserLoader>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path={routes.searchURL} element={<Search />} />
            <Route path={routes.studyURL} element={<Study />} />
            <Route path={routes.referencesURL} element={<References />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserLoader>
  </Provider>,
);
