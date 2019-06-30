import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const CharacterCard = (props) => {
  const { name, detailsCallback, image } = props;

  return (
    <Card className="card">
      <CardActionArea
        onClick={() => detailsCallback({
          name,
          image,
        })}
      >
        <div className="card-wrapper">
          <CardContent className="card-info">
            {name}
          </CardContent>
          <CardMedia
            className="card-image"
            image={image}
            title="Contemplative Reptile"
          />
        </div>
      </CardActionArea>
    </Card>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  detailsCallback: PropTypes.func,
};

CharacterCard.defaultProps = {
  name: '',
  image: '',
  detailsCallback: () => {},
};

export default CharacterCard;
