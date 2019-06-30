import React from 'react';

import Page from 'components/page/Page';
import CharacterCard from 'components/character-card/CharacterCard';

const MainPage = () => (
  <Page>
    <div className="main-page-container">
      Main Page
      <CharacterCard name="Example" />
    </div>
  </Page>
);

export default MainPage;
