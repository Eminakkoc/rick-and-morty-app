import MainPage from 'components/main-page/MainPage';

import queries from 'common/queries/queries';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
${queries.getCharacters()}
`;

export default graphql(query, {
  options: () => ({
    variables: {
      page: 1,
    },
  }),
})(MainPage);
