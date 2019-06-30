import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from 'components/page/Page';
import CharacterCard from 'components/character-card/CharacterCard';
import LoadingCharacterCard from 'components/character-card/LoadingCharacterCard';

import history from 'common/history/History';
import paths from 'routes/paths';

import constants from 'common/constants';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const redirectToDetailsPage = () => {
  history.push({
    pathname: paths.DETAILS_PAGE,
  });
};

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLoad: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { initialLoad } = this.state;
    const { data: { loading } } = this.props;
    const { addCharacters, selectedCharacter } = this.props;

    if (initialLoad && !nextProps.data.loading) {
      this.setState({
        initialLoad: false,
      });
    }

    if (loading && !nextProps.data.loading && nextProps.data.characters) {
      addCharacters(nextProps.data.characters.results);
    }

    if (selectedCharacter !== nextProps.selectedCharacter) {
      redirectToDetailsPage();
    }
  }

  render() {
    const { data: { loading } } = this.props;
    const { characterList, selectCharacter } = this.props;
    const { initialLoad } = this.state;

    return (
      <Page>
        <div className="main-page-container">
          {
            loading && initialLoad ? (
              <div>
                <LoadingCharacterCard />
                <LoadingCharacterCard />
              </div>
            ) : (
              characterList.map(character => (
                <CharacterCard
                  name={character.name}
                  image={character.image}
                  detailsCallback={selectCharacter}
                />
              ))
            )
          }
        </div>
      </Page>
    );
  }
}

const query = gql`
${constants.GET_CHARACTERS}
`;

MainPage.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    characters: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
      })),
    }),
  }),
  characterList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  })),
  addCharacters: PropTypes.func.isRequired,
  selectCharacter: PropTypes.func.isRequired,
  selectedCharacter: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

MainPage.defaultProps = {
  data: {
    loading: false,
    characters: {
      results: [{
        name: '',
        image: '',
      }],
    },
  },
  characterList: [{
    name: '',
    image: '',
  }],
  selectedCharacter: {
    name: '',
    image: '',
  },
};

export default graphql(query)(MainPage);
