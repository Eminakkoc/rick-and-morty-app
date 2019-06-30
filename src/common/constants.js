export default {
  BASE_URL: 'https://rickandmortyapi.com/graphql',
  GET_CHARACTERS: `{
  characters(page: 1) {
    results {
      name
      image
    }
  }
}`,
  GET_CHARACTER_INFO: `{
  characters(page: 1) {
    results {
      name
      image
      origin {
        name
      }
      episode {name}
    }
  }
}`,
};
