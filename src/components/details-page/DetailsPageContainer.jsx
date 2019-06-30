
import { connect } from 'react-redux';

import DetailsPage from 'components/details-page/DetailsPage';

const mapStateToProps = state => ({
  selectedCharacter:
  state.selectedCharacter,
  selectedCharacterInfo:
  state.selectedCharacterInfo,
});

export default connect(mapStateToProps, null)(DetailsPage);
