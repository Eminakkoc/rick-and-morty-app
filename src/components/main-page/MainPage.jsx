import React from 'react';

import Page from 'components/page/Page';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import PlaceholderImage from 'images/placeholder.jpg';

const MainPage = () => (
  <Page>
    <div className="main-page-container">
      Main Page
    </div>
    <Card className="card">
      <CardActionArea>
        <CardMedia
          className="card-image"
          image={PlaceholderImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          Example Card
        </CardContent>
      </CardActionArea>
    </Card>
  </Page>
);

export default MainPage;
