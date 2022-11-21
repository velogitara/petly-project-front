import PropTypes from 'prop-types';
import { imageURLBuilder, ageHandle, categoryTitleHandler } from 'helpers';
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

const imageDummy = '';

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
  const categoryTitle = categoryTitleHandler(category);

  const age = ageHandle(birthday);

  return (
    <ItemContainer>
      <CategoryLabel>{categoryTitle}</CategoryLabel>
      <UserButtons>
        <FavoriteButton noticeId={_id} favorite={favorite} />
        <DeleteButton translucent noticeId={_id} owner={owner} />
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
          {price && categoryTitle === 'sell' && (
            <InfoDescriptionItem>
              <InfoText>Price:</InfoText>
              <InfoText>{`${price}$`}</InfoText>
            </InfoDescriptionItem>
          )}
        </InfoDescription>
      </Info>
      <LearnMoreButton noticeId={_id} favorite={favorite} owner={owner} />
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
