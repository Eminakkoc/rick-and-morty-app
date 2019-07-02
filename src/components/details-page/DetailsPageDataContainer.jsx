import DetailsPage from 'components/details-page/DetailsPage';

import queries from 'common/queries/queries';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
${queries.getCharacterInfo()}
`;

export default graphql(query, {
  options: props => ({
    variables: {
      name: props.selectedCharacter && props.selectedCharacter.name,
    },
  }),
})(DetailsPage);
