import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Search, Study, References, SignIn, SignUp, Activate } from 'pages';
import App from './App';
import * as routes from './routing';
import { store } from './store/store';
import 'styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={`${routes.searchURL}`} element={<Search />} />
          <Route path={routes.studyURL} element={<Study />} />
          <Route path={routes.referencesURL} element={<References />} />
          <Route path={routes.signinURL} element={<SignIn />} />
          <Route path={routes.signupURL} element={<SignUp />} />
          <Route path={`${routes.activateURL}/:token`} element={<Activate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
