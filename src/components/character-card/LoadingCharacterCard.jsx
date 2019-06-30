import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import LoadingImage from 'images/circle_loading.gif';

const LoadingCharacterCard = () => (
  <Card className="card">
    <CardActionArea>
      <div className="card-wrapper">
        <CardContent>
          {'Loading...'}
        </CardContent>
        <CardMedia
          className="card-image"
          image={LoadingImage}
        />
      </div>
    </CardActionArea>
  </Card>
);

export default LoadingCharacterCard;
