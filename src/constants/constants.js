import icons from '../assets/icons/icons.svg';
import noImageMobile from '../assets/images/No image-288.png';
import noImageTablet from '../assets/images/No image-336.png';
import noImageDesktop from '../assets/images/No image-288.png';
import fallbackImage from '../assets/icons/paw.svg';

export const constants = {
  // API_BASE_URL: 'https://petly-project-goit.herokuapp.com/api',
  API_BASE_URL: 'http://localhost:3001/api',

  icons,
  fallbackImage,
  categories: {
    publicCategories: [
      ['lost', 'lost'],
      ['found', 'found'],
      ['for-free', 'in good hands'],
      ['sell', 'sell'],
    ],
    privateCategories: [
      ['favorite', 'Favorite ads'],
      ['own', 'My ads'],
    ],
  },
  noImage: {
    mobile: noImageMobile,
    tablet: noImageTablet,
    desktop: noImageDesktop,
  },
};
