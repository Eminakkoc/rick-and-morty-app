
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addCharacters,
  selectCharacter,
} from 'state/actions/characterActions';

import MainPage from 'components/main-page/MainPage';

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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
