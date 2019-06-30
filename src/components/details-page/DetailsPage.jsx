import React from 'react';

import Page from 'components/page/Page';
import CharacterDetail from 'components/character-detail/CharacterDetail';
import PlaceholderImage from 'images/placeholder.jpg';

const DetailsPage = () => (
  <Page>
    <div className="details-page-container">
      <CharacterDetail
        name="Emin"
        origin="Ankara"
        image={PlaceholderImage}
      />
    </div>
  </Page>
);

export default DetailsPage;
