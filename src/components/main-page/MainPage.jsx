import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from 'components/page/Page';
import CharacterCard from 'components/character-card/CharacterCard';
import LoadingCharacterCard from 'components/character-card/LoadingCharacterCard';
import ErrorCharacterCard from 'components/character-card/ErrorCharacterCard';

import history from 'common/history/History';
import paths from 'routes/paths';

import queries from 'common/queries/queries';

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
      initialLoad: (!props.selectedCharacter || !props.selectedCharacter.name),
      page: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { initialLoad } = this.state;
    const { data: { loading } } = this.props;
    const {
      addCharacters,
      selectedCharacter,
    } = this.props;

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

  fetchData = () => {
    const { data: { refetch } } = this.props;
    const { page } = this.state;
    const newPage = page + 1;

    refetch({
      page: newPage,
    });
    this.setState({
      page: newPage,
    });
  };

  render() {
    const { data: { loading, error } } = this.props;
    const { characterList, selectCharacter } = this.props;
    const { initialLoad } = this.state;

    return (
      <Page>
        <div className="main-page-container">
          {
            error
            && (
              <ErrorCharacterCard />
            )
          }
          {
            loading && initialLoad && !error ? (
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
          <button
            type="button"
            onClick={this.fetchData}
          >
            BAS
          </button>
          <div className="small-loading-container">
            <div className="small-loading" />
          </div>
        </div>
      </Page>
    );
  }
}

const query = gql`
${queries.getCharacters()}
`;

MainPage.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.shape(),
    characters: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
      })),
    }),
    refetch: PropTypes.func.isRequired,
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
    name: null,
    image: '',
  },
};

export default graphql(query, {
  options: () => ({
    variables: {
      page: 1,
    },
  }),
})(MainPage);
