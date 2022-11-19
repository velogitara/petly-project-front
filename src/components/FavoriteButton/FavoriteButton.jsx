import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthId } from 'redux/authState';
import { useUpdateFavoritesMutation } from 'redux/notices';
import { toast } from 'react-toastify';
import PopUp from 'components/PopUp';
import { constants } from 'constants/constants';
import { FavButtonContainer, FavButton, FavIcon } from './FavoriteButton.styled';

const { icons } = constants;

const FavoriteButton = ({ noticeId, favorite }) => {
  const [favoriteState, setFavoriteState] = useState(favorite);
  const [showNotLogged, setShowNotLogged] = useState(false);
  const [updateFavorites] = useUpdateFavoritesMutation();

  const authId = useSelector(selectAuthId);

  const toggleFavorite = () => {
    if (!authId) {
      setShowNotLogged(true);
      return;
    }
    try {
      updateFavorites({ noticeId, favorite: !favoriteState }).then(response => {
        if (response.error) {
          toast.error(response.error.data.message);
        }
        if (response.data) {
          toast.success(response?.data?.message ?? 'Success');
          setFavoriteState(favoriteState => !favoriteState);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FavButtonContainer>
      <FavButton
        favorite={favoriteState}
        type="button"
        title={`${favoriteState ? 'Remove from' : 'Add to'} favorites`}
        onClick={toggleFavorite}
      >
        <FavIcon aria-label="In Favorites">
          <use href={`${icons}#icon-heart-outlined`} />
        </FavIcon>
      </FavButton>
      {showNotLogged && <PopUp message="Please, log in." onClose={() => setShowNotLogged(false)} />}
    </FavButtonContainer>
  );
};

FavoriteButton.propTypes = {
  noticeId: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
};

export default FavoriteButton;
