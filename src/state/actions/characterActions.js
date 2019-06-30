export const CHARACTER_ACTIONS = {
  ADD_CHARACTERS: 'ADD_CHARACTERS',
  SELECT_CHARACTER: 'SELECT_CHARACTER',
  SET_SELECTED_CHARACTER_INFO: 'SET_SELECTED_CHARACTER_INFO',
};

export const addCharacters = data => ({
  type: CHARACTER_ACTIONS.ADD_CHARACTERS,
  payload: data,
});

export const selectCharacter = data => ({
  type: CHARACTER_ACTIONS.SELECT_CHARACTER,
  payload: data,
});

export const setSelectedCharacterInfo = data => ({
  type: CHARACTER_ACTIONS.SET_SELECTED_CHARACTER_INFO,
  payload: data,
});
