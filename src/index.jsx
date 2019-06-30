import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import ReduxStore from 'state/ReduxStore';

import paths from 'routes/paths';

import MainPageContainer from 'components/main-page/MainPageContainer';
import DetailsPage from 'components/details-page/DetailsPage';
import { LanguageProvider } from 'common/language/LanguageContext';

import history from 'common/history/History';
import constants from 'common/constants';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  link: createHttpLink({ uri: constants.BASE_URL }),
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <Provider store={ReduxStore.store}>
    <LanguageProvider>
      <ApolloProvider client={client}>
        <Router history={history}>
          <Switch>
            <Route
              path={paths.MAIN_PAGE}
              component={MainPageContainer}
            />
            <Route
              path={paths.DETAILS_PAGE}
              component={DetailsPage}
            />
          </Switch>
        </Router>
      </ApolloProvider>
    </LanguageProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
