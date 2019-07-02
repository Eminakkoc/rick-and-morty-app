
import { connect } from 'react-redux';

import DetailsPageDataContainer from 'components/details-page/DetailsPageDataContainer';

const mapStateToProps = state => ({
  selectedCharacter:
  state.selectedCharacter,
  selectedCharacterInfo:
  state.selectedCharacterInfo,
});

export default connect(mapStateToProps, null)(DetailsPageDataContainer);
