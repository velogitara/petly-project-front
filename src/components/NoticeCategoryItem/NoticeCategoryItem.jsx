import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/authState';
import { imageURLBuilder, ownerCheck } from 'helpers';
import { constants } from 'constants/constants';
import FavoriteButton from 'components/FavoriteButton';
import DeleteButton from 'components/DeleteButton';
import PopUp from 'components/PopUp';
import ConfirmButtons from 'components/ConfirmButtons';
import {
  ItemContainer,
  ItemImage,
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
}) => {
  const [favoriteState, setFavoriteState] = useState(favorite);
  const [showNotLogged, setShowNotLogged] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const isLogged = useSelector(selectAuthToken);

  const toggleFavorite = () => {
    if (!isLogged) {
      setShowNotLogged(true);
      return;
    }
    setFavoriteState(favoriteState => !favoriteState);
  };

  const removeNotice = ({ noticeId }) => {
    console.log(noticeId);
    setShowDeleteConfirm(false);
  };

  const categoryName = publicCategories.find(item => item[0] === category)[1];
  return (
    <ItemContainer>
      <CategoryLabel>{categoryName}</CategoryLabel>
      <UserButtons>
        <FavoriteButton
          favorite={favoriteState}
          type="button"
          title={`${favorite ? 'Remove from' : 'Add to'} favorites`}
          toggleFavorite={toggleFavorite}
        />
        {ownerCheck({ userId, noticeOwner: owner }) && (
          <DeleteButton
            type="button"
            title="Remove your notice"
            translucent
            onDelete={() => setShowDeleteConfirm(true)}
          ></DeleteButton>
        )}
        {showDeleteConfirm && (
          <PopUp message="Are you sure?" onClose={() => setShowDeleteConfirm(false)}>
            <ConfirmButtons
              onClickYes={() => removeNotice({ noticeId: _id })}
              onClickNo={() => setShowDeleteConfirm(false)}
            />
          </PopUp>
        )}
        {showNotLogged && (
          <PopUp message="You should be logged in" onClose={() => setShowNotLogged(false)} />
        )}
      </UserButtons>
      {/* TODO: refactor image to picture with sizes */}
      <ItemImage src={imageURL ? imageURLBuilder(imageURL?.mobile) : ''} alt={title} />
      <Info>
        <InfoTitle>{title}</InfoTitle>
        <InfoDescription>
          {/* TODO: make proper layout of Info */}
          <InfoDescriptionItem>
            <InfoText>Breed: {breed}</InfoText>
          </InfoDescriptionItem>
          <InfoDescriptionItem>
            <InfoText>Place: {location}</InfoText>
          </InfoDescriptionItem>
          {/* TODO: write function to calculate age */}
          {birthday && (
            <InfoDescriptionItem>
              <InfoText>Age: {birthday}</InfoText>
            </InfoDescriptionItem>
          )}
        </InfoDescription>
      </Info>
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
  birthday: PropTypes.string,
  category: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  owner: PropTypes.string.isRequired,
};

export default NoticeCategoryItem;
