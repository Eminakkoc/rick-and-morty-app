export default {
  getCharacters: () => `query ($page: Int!) {
  characters(page: $page) {
    results {
      name
      image
    }
  }
}
  `,
  getCharacterInfo: () => `query ($name: String!) {
  characters(filter: { name: $name }) {
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
