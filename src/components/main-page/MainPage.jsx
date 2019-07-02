import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from 'components/page/Page';
import CharacterCard from 'components/character-card/CharacterCard';
import LoadingCharacterCard from 'components/character-card/LoadingCharacterCard';
import ErrorCharacterCard from 'components/character-card/ErrorCharacterCard';

import history from 'common/history/History';
import paths from 'routes/paths';

import BomUtil from 'common/util/BomUtil';

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
      loadingInProgress: false,
      selectedElement: null,
    };

    this.debounceScroll = BomUtil.debounce(() => {
      const { characterList } = this.props;

      if (BomUtil.isScrolledToBottom() && characterList && characterList.length > 1) {
        this.fetchData();
      }
    }, 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.debounceScroll);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { initialLoad, loadingInProgress, selectedElement } = prevState;
    const { data: { loading } } = nextProps;
    const {
      addCharacters,
      selectedCharacter,
    } = nextProps;

    let updatedtInitialLoad = initialLoad;

    if (initialLoad && !nextProps.data.loading) {
      updatedtInitialLoad = false;
    }

    if (loadingInProgress && !nextProps.data.loading && nextProps.data.characters) {
      addCharacters(nextProps.data.characters.results);
    }

    if (selectedElement && selectedElement !== nextProps.selectedCharacter) {
      redirectToDetailsPage();
    }

    return {
      initialLoad: updatedtInitialLoad,
      loadingInProgress: loading,
      selectedElement: selectedCharacter,
    };
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debounceScroll);
  }

  fetchData = () => {
    const { data: { refetch } } = this.props;
    const { page } = this.state;
    const newPage = page + 1;

    this.setState({
      page: newPage,
    }, () => {
      console.log('PAGE: ', newPage);
      refetch({
        page: newPage,
      });
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
                  key={`${character.id}`}
                  name={character.name}
                  image={character.image}
                  detailsCallback={selectCharacter}
                />
              ))
            )
          }
          { loading
          && (
            <div className="small-loading-container">
              <div className="small-loading" />
            </div>
          )
          }
        </div>
      </Page>
    );
  }
}

MainPage.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.shape(),
    characters: PropTypes.shape({
      results: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
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
  // eslint-disable-next-line react/no-unused-prop-types
  addCharacters: PropTypes.func.isRequired, //
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

export default MainPage;
