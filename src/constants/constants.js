import icons from '../assets/icons/icons.svg';
import noImageMobile from '../assets/images/no-image-280.jpg';
import noImageTablet from '../assets/images/no-image-336.jpg';
import noImageDesktop from '../assets/images/no-image-288.jpg';
import noImageMobileRetina from '../assets/images/no-image-280_retina.jpg';
import noImageTabletRetina from '../assets/images/no-image-336_retina.jpg';
import noImageDesktopRetina from '../assets/images/no-image-288_retina.jpg';
import noImageProfile from '../assets/images/no-image-328.jpg';
import noImageProfileRetina from '../assets/images/no-image-328_retina.jpg';
import noImageProfileMobile from '../assets/images/no-image-240.jpg';
import noImageProfileMobileRetina from '../assets/images/defaultPet-240_retina.png';

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
    mobileRetina: noImageMobileRetina,
    tablet: noImageTablet,
    tabletRetina: noImageTabletRetina,
    desktop: noImageDesktop,
    desktopRetina: noImageDesktopRetina,
    profile: noImageProfile,
    profileRetina: noImageProfileRetina,
    profileMobile: noImageProfileMobile,
    profileMobileRetina: noImageProfileMobileRetina,
  },
};
