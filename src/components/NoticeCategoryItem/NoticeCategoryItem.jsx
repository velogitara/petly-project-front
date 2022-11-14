import PropTypes from 'prop-types';
import { constants } from 'constants/constants';
import {
  ItemContainer,
  ItemImage,
  ItemInfo,
  ItemInfoTitle,
  ItemInfoText,
  //   _id,
} from './NoticeCategoryItem.styled';

const imageURLBuilder = imageURL => {
  const { API_BASE_URL } = constants;
  return `${API_BASE_URL.replace('api', '')}/${imageURL}`;
};

const NoticeCategoryItem = ({ _id, imageURL, title, breed, location, birthday }) => {
  console.log(imageURL);
  return (
    <ItemContainer>
      {/* TODO: refactor image to picture with sizes */}
      <ItemImage src={imageURL ? imageURLBuilder(imageURL?.mobile) : ''} alt={title} />
      <ItemInfoTitle>{title}</ItemInfoTitle>
      <ItemInfo>
        {/* TODO: make proper layout of Info */}
        <ItemInfoText>Breed: {breed}</ItemInfoText>
        <ItemInfoText>BPlace: {location}</ItemInfoText>
        {/* TODO: write function to calculate age */}
        <ItemInfoText>Age: {birthday}</ItemInfoText>
      </ItemInfo>
      learn more
      {/* TODO: insert button learn more */}
    </ItemContainer>
  );
};

NoticeCategoryItem.propTypes = {
  _id: PropTypes.string.isRequired,
  imageURL: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default NoticeCategoryItem;
