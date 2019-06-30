import React from 'react';

import Page from 'components/page/Page';
import CharacterDetail from 'components/character-detail/CharacterDetail';
import PlaceholderImage from 'images/placeholder.jpg';

import history from 'common/history/History';
import paths from 'routes/paths';

const redirectToMainPage = () => {
  history.push({
    pathname: paths.MAIN_PAGE,
  });
};

const DetailsPage = () => (
  <Page backTransition={redirectToMainPage}>
    <div className="details-page-container">
      <CharacterDetail
        name="Emin"
        origin="Ankara"
        image={PlaceholderImage}
        episodeList={['asd', 'zxc', 'wer', 'try', 'bnm']}
      />
    </div>
  </Page>
);

export default DetailsPage;
