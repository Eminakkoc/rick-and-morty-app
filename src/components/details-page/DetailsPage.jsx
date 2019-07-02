import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from 'components/page/Page';
import CharacterDetail from 'components/character-detail/CharacterDetail';
import LoadingCharacterDetail from 'components/character-detail/LoadingCharacterDetail';
import ErrorCharacterCard from 'components/character-card/ErrorCharacterCard';

import history from 'common/history/History';
import paths from 'routes/paths';

const redirectToMainPage = () => {
  history.push({
    pathname: paths.MAIN_PAGE,
  });
};

class DetailsPage extends Component {
  componentWillMount() {
    const { selectedCharacter: { name } } = this.props;

    if (!name) {
      history.replace({
        pathname: paths.MAIN_PAGE,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const { data: { refetch } } = this.props;
    const { selectedCharacter } = this.props;

    if (prevProps.selectedCharacter.name !== selectedCharacter.name) {
      refetch({
        name: selectedCharacter.name,
      });
    }
  }

  getEpisodeList = () => {
    const { data: { characters } } = this.props;
    const results = characters && characters.results;
    let episodeList = [];
    let info;

    if (results && results[0]) {
      [info] = results;
      episodeList = results[0].episode
        && info.episode.map(episodeObject => ({
          key: episodeObject.id,
          id: episodeObject.id,
          name: episodeObject.name,
        }));
    }

    return episodeList;
  };

  render() {
    const { data: { characters, error, loading } } = this.props;
    const results = characters && characters.results;
    const [info] = (results && results[0]) ? results : [];

    return (
      <Page backTransition={redirectToMainPage}>
        <div className="details-page-container">
          {
            error
            && (
              <ErrorCharacterCard />
            )
          }
          {
            !error && loading && <LoadingCharacterDetail />
          }
          {
            results && !error && !loading
            && (
              <CharacterDetail
                name={info.name}
                origin={info.origin && info.origin.name}
                image={info.image}
                episodeList={this.getEpisodeList()}
              />
            )
          }
        </div>
      </Page>
    );
  }
}

DetailsPage.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.shape(),
    characters: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        origin: PropTypes.shape({
          name: PropTypes.string,
        }),
        episode: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
        })),
      })),
    }),
    refetch: PropTypes.func.isRequired,
  }),
  selectedCharacter: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

DetailsPage.defaultProps = {
  data: {
    loading: false,
    error: false,
    characters: {
      results: [{
        name: '',
        image: '',
        origin: {
          name: '',
        },
        episode: {
          id: '',
          name: '',
        },
      }],
    },
  },
  selectedCharacter: {
    name: null,
    image: '',
  },
};

export default DetailsPage;
