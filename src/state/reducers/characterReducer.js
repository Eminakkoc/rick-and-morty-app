import { CHARACTER_ACTIONS } from 'state/actions/characterActions';

const initialState = {
  characterList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_ACTIONS.ADD_CHARACTERS: {
      return !action.error
        ? {
          ...state,
          characterList: state.characterList.concat(action.payload),
        } : state;
    }
    case CHARACTER_ACTIONS.SELECT_CHARACTER: {
      return !action.error ? { ...state, selectedCharacter: action.payload } : state;
    }
    case CHARACTER_ACTIONS.SET_SELECTED_CHARACTER_INFO: {
      return !action.error ? { ...state, selectedCharacterInfo: action.payload } : state;
    }
    default:
      return state;
  }
};
