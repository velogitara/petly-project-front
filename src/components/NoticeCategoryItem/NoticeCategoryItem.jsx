import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { selectAuthToken } from 'redux/authState';
import { imageURLBuilder, ownerCheck, ageHandle } from 'helpers';
import { constants } from 'constants/constants';
import FavoriteButton from 'components/FavoriteButton';
import DeleteButton from 'components/DeleteButton';
import LearnMoreButton from 'components/LearnMoreButton';
import {
  ItemContainer,
  ItemPicture,
  Info,
  InfoTitle,
  InfoDescription,
  InfoDescriptionItem,
  InfoText,
  CategoryLabel,
  UserButtons,
} from './NoticeCategoryItem.styled';

const {
  categories: { publicCategories },
} = constants;

const userId = '636e250a3fc8cdfd9b8f0cba'; // hardcode to remove

const NoticeCategoryItem = ({
  _id,
  imageURL,
  title,
  breed,
  location,
  birthday,
  category,
  favorite,
  owner,
  price,
}) => {
  // const isLogged = useSelector(selectAuthToken);

  const categoryName = publicCategories.find(item => item[0] === category)[1];

  const age = ageHandle(birthday);

  const imageDummy = '';

  const removeNotice = ({ noticeId }) => {
    console.log(noticeId);
  };

  const openModal = ({ noticeId }) => {
    console.log(noticeId);
  };

  return (
    <ItemContainer>
      <CategoryLabel>{categoryName}</CategoryLabel>
      <UserButtons>
        <FavoriteButton favorite={favorite} />
        {ownerCheck({ userId, noticeOwner: owner }) && (
          <DeleteButton translucent onRemove={() => removeNotice({ noticeId: _id })} />
        )}
      </UserButtons>
      <ItemPicture>
        <source
          srcSet={`${imageURL ? imageURLBuilder(imageURL?.mobile) : ''} 280w, ${
            imageURL ? imageURLBuilder(imageURL?.mobileRetina) : ''
          } 560w`}
          media="(max-width: 767px)"
          sizes="280px"
        />
        <source
          srcSet={`${imageURL ? imageURLBuilder(imageURL?.desktop) : ''} 288w, ${
            imageURL ? imageURLBuilder(imageURL?.mobileRetina) : ''
          } 576w`}
          media="(min-width: 1280px)"
          sizes="288px"
        />
        <source
          srcSet={`${imageURL ? imageURLBuilder(imageURL?.tablet) : ''} 336w, ${
            imageURL ? imageURLBuilder(imageURL?.tabletRetina) : ''
          } 672w`}
          media="(min-width: 768px)"
          sizes="336px"
        />
        <img
          src={imageURL ? imageURLBuilder(imageURL?.tablet) : imageDummy}
          loading="lazy"
          alt={title}
        />
      </ItemPicture>
      <Info>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescription>
          <InfoDescriptionItem>
            <InfoText>Breed:</InfoText>
            <InfoText>{breed}</InfoText>
          </InfoDescriptionItem>
          <InfoDescriptionItem>
            <InfoText>Place:</InfoText>
            <InfoText>{location}</InfoText>
          </InfoDescriptionItem>
          {age && (
            <InfoDescriptionItem>
              <InfoText>Age:</InfoText>
              <InfoText>{age}</InfoText>
            </InfoDescriptionItem>
          )}
          {price && (
            <InfoDescriptionItem>
              <InfoText>Price:</InfoText>
              <InfoText>{`${price}$`}</InfoText>
            </InfoDescriptionItem>
          )}
        </InfoDescription>
      </Info>
      <LearnMoreButton onPress={() => openModal({ noticeId: _id })} />
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
  birthday: PropTypes.string,
  category: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  owner: PropTypes.string.isRequired,
  price: PropTypes.number,
};

export default NoticeCategoryItem;
