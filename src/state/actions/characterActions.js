export const CHARACTER_ACTIONS = {
  ADD_CHARACTERS: 'ADD_CHARACTERS',
  SELECT_CHARACTER: 'SELECT_CHARACTER',
};

export const addCharacters = data => ({
  type: CHARACTER_ACTIONS.ADD_CHARACTERS,
  payload: data,
});

export const selectCharacter = data => ({
  type: CHARACTER_ACTIONS.SELECT_CHARACTER,
  payload: data,
});
