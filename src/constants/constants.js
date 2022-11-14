import icons from '../assets/icons/icons.svg';

export const constants = {
  API_BASE_URL: 'http://localhost:3001/api',
  icons,
  categories: {
    publicCategories: {
      lost: ['lost', 'lost'],
      found: ['found', 'found'],
      sell: ['sell', 'sell'],
      forFree: ['for-free', 'in good hands'],
    },
    privateCategories: {
      favorites: ['favorite', 'Favorite ads'],
      own: ['own', 'My ads'],
    },
  },
};
