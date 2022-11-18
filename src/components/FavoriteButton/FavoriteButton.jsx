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
  const [updateFavorites, { isSuccess }] = useUpdateFavoritesMutation();

  const authId = useSelector(selectAuthId);
  // const authId = '637021587475d007fb85d3d4';

  const toggleFavorite = () => {
    if (!authId) {
      setShowNotLogged(true);
      return;
    }
    try {
      updateFavorites({ noticeId, favorite: !favoriteState }).then(response => {
        if (response.status !== 200) {
          toast.error(response.error.data.message);
        }
        if (isSuccess) {
          toast.success(response?.body?.message);
          setFavoriteState(favoriteState => !favoriteState);
        }
      });
    } catch (error) {
      console.log(error.message);
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
