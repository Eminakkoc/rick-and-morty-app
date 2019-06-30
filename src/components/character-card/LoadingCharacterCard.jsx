import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import LoadingImage from 'images/circle_loading.gif';

import { LanguageConsumer } from 'common/language/LanguageContext';
import languages from 'common/language/languages';

const LoadingCharacterCard = () => (
  <LanguageConsumer>
    {({ language }) => (
      <Card className="card">
        <CardActionArea>
          <div className="card-wrapper">
            <CardContent>
              {languages[language].loading}
            </CardContent>
            <CardMedia
              className="card-image"
              image={LoadingImage}
            />
          </div>
        </CardActionArea>
      </Card>
    )}
  </LanguageConsumer>
);

export default LoadingCharacterCard;
