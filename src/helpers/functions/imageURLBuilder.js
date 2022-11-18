import { constants } from 'constants/constants';

const imageURLBuilder = imageURL => {
  const { API_BASE_URL } = constants;
  return `${API_BASE_URL.replace('api', '')}${imageURL}`;
};

export { imageURLBuilder };
