import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { createBrowserHistory } from 'history';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import paths from 'routes/paths';

import MainPage from 'components/main-page/MainPage';
import DetailsPage from 'components/details-page/DetailsPage';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
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
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
