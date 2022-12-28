import PropTypes from 'prop-types';
import { useState } from 'react';
import { ageHandle, categoryTitleHandler } from 'helpers';
import FavoriteButton from 'components/FavoriteButton';
import DeleteButton from 'components/DeleteButton';
import LearnMoreButton from 'components/LearnMoreButton';
import { constants } from 'constants/constants';
import ImageModal from 'components/ImagesModal';

import {
  ItemContainer,
  ItemPicture,
  ItemImage,
  Info,
  InfoTitle,
  InfoDescription,
  InfoDescriptionItem,
  InfoText,
  CategoryLabel,
  UserButtons,
} from './NoticeCategoryItem.styled';

const { noImage } = constants;

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
  const [showModal, setShowModal] = useState(false);
  const age = ageHandle(birthday);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ItemContainer>
      <CategoryLabel>{categoryTitle}</CategoryLabel>
      <UserButtons>
        <FavoriteButton noticeId={_id} favorite={favorite} />
        <DeleteButton translucent noticeId={_id} owner={owner} />
      </UserButtons>
      <ItemPicture>
        <source
          srcSet={`${imageURL ? imageURL?.mobile : noImage.mobile} 280w, ${
            imageURL ? imageURL?.mobile_retina : noImage.mobileRetina
          } 560w`}
          media="(max-width: 767px)"
          sizes="280px"
        />
        <source
          srcSet={`${imageURL ? imageURL?.desktop : noImage.desktop} 288w, ${
            imageURL ? imageURL?.desktop_retina : noImage.desktopRetina.replace('%40', '@')
          } 576w`}
          media="(min-width: 1280px)"
          sizes="288px"
        />
        <source
          srcSet={`${imageURL ? imageURL?.tablet : noImage.tablet} 336w, ${
            imageURL ? imageURL?.tablet_retina : noImage.tabletRetina.replace('%40', '@')
          } 672w`}
          media="(min-width: 768px)"
          sizes="336px"
        />
        <ItemImage
          src={imageURL ? imageURL?.tablet : noImage.tablet}
          loading="lazy"
          alt={title}
          onClick={toggleModal}
        />
        {showModal && <ImageModal onClose={toggleModal} image={imageURL} />}
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
          {categoryTitle === 'sell' && price && (
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
