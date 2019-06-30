import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import PlaceholderImage from 'images/placeholder.jpg';

const CharacterCard = (props) => {
  const { name } = props;

  return (
    <Card className="card">
      <CardActionArea>
        <div className="card-wrapper">
          <CardContent>
            {name}
          </CardContent>
          <CardMedia
            className="card-image"
            image={PlaceholderImage}
            title="Contemplative Reptile"
          />
        </div>
      </CardActionArea>
    </Card>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string,
};

CharacterCard.defaultProps = {
  name: '',
};

export default CharacterCard;
