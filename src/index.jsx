import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Router, Route, Switch } from 'react-router-dom';

import paths from 'routes/paths';

import MainPage from 'components/main-page/MainPage';
import DetailsPage from 'components/details-page/DetailsPage';
import { LanguageProvider } from 'common/language/LanguageContext';

import history from 'common/history/History';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <LanguageProvider>
    <Router history={history}>
      <Switch>
        <Route
          path={paths.MAIN_PAGE}
          component={MainPage}
        />
        <Route
          path={paths.DETAILS_PAGE}
          component={DetailsPage}
        />
      </Switch>
    </Router>
  </LanguageProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
