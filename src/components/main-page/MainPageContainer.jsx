
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addCharacters,
  selectCharacter,
} from 'state/actions/characterActions';

import MainPageDataContainer from 'components/main-page/MainPageDataContainer';

const mapStateToProps = state => ({
  characterList:
  state.characterList,
  selectedCharacter:
  state.selectedCharacter,
  page:
  state.page,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addCharacters,
  selectCharacter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainPageDataContainer);
