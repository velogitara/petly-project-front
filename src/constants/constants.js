import icons from '../assets/icons/icons.svg';
import fallbackImage from '../assets/icons/paw.svg';

export const constants = {
  API_BASE_URL: 'https://petly-project-goit.herokuapp.com/api',
  // API_BASE_URL: 'http://localhost:3001/api',

  icons,
  fallbackImage,
  categories: {
    publicCategories: [
      ['lost', 'lost'],
      ['found', 'found'],
      ['sell', 'sell'],
      ['for-free', 'in good hands'],
    ],
    privateCategories: [
      ['favorite', 'Favorite ads'],
      ['own', 'My ads'],
    ],
  },
};
