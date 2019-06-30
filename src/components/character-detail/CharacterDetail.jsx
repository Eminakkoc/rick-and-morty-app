import React from 'react';
import PropTypes from 'prop-types';

import { LanguageConsumer } from 'common/language/LanguageContext';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import InfoPair from 'components/info-pair/InfoPair';

import languages from 'common/language/languages';

const CharacterDetail = (props) => {
  const {
    image,
    name,
    origin,
    episodeList,
  } = props;

  const getEpisodes = episodes => (
    <div className="episode-list-container">
      {
        episodes && episodes.map(episode => (
          <div className="episode">
            { episode }
          </div>
        ))
      }
    </div>
  );

  return (
    <LanguageConsumer>
      {({ language }) => (
        <Card className="details-card">
          <div className="details-card-wrapper">
            <CardContent>
              <div className="details-container">
                <div className="details-image-container">
                  <img className="details-image" src={image} alt="" />
                </div>
                <div className="details-wrapper">
                  <div className="character-name">
                    {name}
                  </div>
                  <div className="details-character-info">
                    <InfoPair
                      label={languages[language].character_details_origin_label}
                      value={origin}
                    />
                    <InfoPair
                      label={languages[language].character_details_episodes_label}
                      value={getEpisodes(episodeList)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      )}
    </LanguageConsumer>
  );
};

CharacterDetail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  episodeList: PropTypes.arrayOf(PropTypes.string),
};

CharacterDetail.defaultProps = {
  name: '',
  image: null,
  origin: null,
  episodeList: null,
};

export default CharacterDetail;
