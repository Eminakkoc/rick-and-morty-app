export default (episodeLength) => {
  const episodeList = [
    {
      id: '1',
      name: 'Mock Episode 1',
    },
    {
      id: '2',
      name: 'Mock Episode 2',
    },
    {
      id: '3',
      name: 'Mock Episode 3',
    },
    {
      id: '4',
      name: 'Mock Episode 4',
    },
    {
      id: '5',
      name: 'Mock Episode 5',
    },
    {
      id: '6',
      name: 'Mock Episode 6',
    },
    {
      id: '7',
      name: 'Mock Episode 7',
    },
    {
      id: '8',
      name: 'Mock Episode 8',
    },
  ];

  return {
    name: 'Mock Name',
    image: 'Mock image source',
    origin: 'Mock Origin',
    episodeList: episodeList.slice(0, episodeLength),
  };
};
