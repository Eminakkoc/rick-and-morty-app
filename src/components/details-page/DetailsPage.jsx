import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from 'components/page/Page';
import CharacterDetail from 'components/character-detail/CharacterDetail';
import LoadingCharacterDetail from 'components/character-detail/LoadingCharacterDetail';

import history from 'common/history/History';
import paths from 'routes/paths';

import queries from 'common/queries/queries';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const redirectToMainPage = () => {
  history.push({
    pathname: paths.MAIN_PAGE,
  });
};

class DetailsPage extends Component {
  componentDidUpdate(prevProps) {
    const { data: { refetch } } = this.props;
    const { selectedCharacter } = this.props;

    if (prevProps.selectedCharacter.name !== selectedCharacter.name) {
      refetch({
        name: selectedCharacter.name,
      });
    }
  }

  render() {
    const { data: { characters } } = this.props;
    const results = characters && characters.results;
    let episodeList;
    let info;

    if (results && results[0]) {
      [info] = results;
      episodeList = results[0].episode
        && info.episode.map(episodeObject => episodeObject.name);
    }

    return (
      <Page backTransition={redirectToMainPage}>
        <div className="details-page-container">
          {
            results
              ? (
                <CharacterDetail
                  name={info.name}
                  origin={info.origin.name}
                  image={info.image}
                  episodeList={episodeList}
                />
              ) : (
                <LoadingCharacterDetail />
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
    characters: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        origin: PropTypes.shape({
          name: PropTypes.string,
        }),
        episode: PropTypes.arrayOf(PropTypes.shape({
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
    characters: {
      results: [{
        name: '',
        image: '',
        origin: {
          name: '',
        },
        episode: {
          name: '',
        },
      }],
    },
  },
  selectedCharacter: {
    name: '',
    image: '',
  },
};

const query = gql`
${queries.getCharacterInfo()}
`;

export default graphql(query, {
  options: props => ({
    variables: {
      name: props.selectedCharacter.name,
    },
  }),
})(DetailsPage);
