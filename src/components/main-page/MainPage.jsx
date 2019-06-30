import React from 'react';

import Page from 'components/page/Page';
import CharacterCard from 'components/character-card/CharacterCard';

import history from 'common/history/History';
import paths from 'routes/paths';

const redirectToDetailsPage = () => {
  history.push({
    pathname: paths.DETAILS_PAGE,
  });
};

const MainPage = () => (
  <Page>
    <div className="main-page-container">
      <CharacterCard
        name="Example"
        detailsCallback={redirectToDetailsPage}
      />
    </div>
  </Page>
);

export default MainPage;
