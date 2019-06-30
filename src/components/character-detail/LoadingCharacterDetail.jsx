import React from 'react';

import { LanguageConsumer } from 'common/language/LanguageContext';
import languages from 'common/language/languages';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import LoadingImage from 'images/circle_loading.gif';

const LoadingCharacterDetail = () => (
  <LanguageConsumer>
    {({ language }) => (
      <Card className="details-card">
        <div className="details-card-wrapper">
          <CardContent>
            <div className="details-container">
              <div className="details-image-container">
                <img className="details-image" src={LoadingImage} alt="" />
              </div>
              <div className="details-wrapper loading">
                <div className="character-name">
                  {languages[language].loading}
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    )}
  </LanguageConsumer>
);

export default LoadingCharacterDetail;
