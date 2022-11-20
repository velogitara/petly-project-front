import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/authState';
import { useUpdateFavoritesMutation } from 'redux/notices';
import { toast } from 'react-toastify';
import PopUp from 'components/PopUp';
import { constants } from 'constants/constants';
import { FavButtonContainer, FavButton, FavIcon, FavLabel } from './FavoriteButton.styled';

const { icons } = constants;

const FavoriteButton = ({ noticeId, favorite, modal, label }) => {
  const [favoriteState, setFavoriteState] = useState(favorite);
  const [showNotLogged, setShowNotLogged] = useState(false);
  const [updateFavorites] = useUpdateFavoritesMutation();

  const isLogged = useSelector(selectAuthToken);

  const toggleFavorite = () => {
    if (!isLogged) {
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
    <FavButtonContainer modal={modal}>
      <FavButton
        modal={modal}
        favorite={favoriteState}
        type="button"
        title={`${favoriteState ? 'Remove from' : 'Add to'} favorites`}
        onClick={toggleFavorite}
      >
        {label && <FavLabel>{favoriteState ? 'Remove from' : 'Add to'}</FavLabel>}
        <FavIcon modal={modal} aria-label="In Favorites">
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
  modal: PropTypes.bool,
  label: PropTypes.bool,
};

export default FavoriteButton;
