import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import ErrorImage from 'images/error.gif';

import { LanguageConsumer } from 'common/language/LanguageContext';
import languages from 'common/language/languages';

const ErrorCharacterCard = () => (
  <LanguageConsumer>
    {({ language }) => (
      <Card className="card">
        <CardActionArea>
          <div className="card-wrapper error">
            <CardContent>
              {languages[language].error}
            </CardContent>
            <CardMedia
              className="card-image"
              image={ErrorImage}
            />
          </div>
        </CardActionArea>
      </Card>
    )}
  </LanguageConsumer>
);

export default ErrorCharacterCard;
