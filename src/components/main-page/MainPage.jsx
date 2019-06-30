import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from 'components/page/Page';
import CharacterCard from 'components/character-card/CharacterCard';
import LoadingCharacterCard from 'components/character-card/LoadingCharacterCard';

import history from 'common/history/History';
import paths from 'routes/paths';

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

  getDerivedStateFromProps(nextProps) {
    const { initialLoad } = this.state;

    if (initialLoad && !nextProps.data.loading) {
      this.setState({
        initialLoad: false,
      });
    }
  }

  render() {
    const { data: { loading } } = this.props;
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
              <CharacterCard
                name="Example"
                detailsCallback={redirectToDetailsPage}
              />
            )
          }
        </div>
      </Page>
    );
  }
}

const query = gql`
{
  characters(page: 1) {
    info {
      count
    }
    results {
      name
      image
      origin {
        name
      }
      episode {name}
    }
  }
}
`;

MainPage.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
  }),
};

MainPage.defaultProps = {
  data: {
    loading: false,
  },
};

export default graphql(query)(MainPage);
