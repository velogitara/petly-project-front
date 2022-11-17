import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthId } from 'redux/authState';
import PopUp from 'components/PopUp';
import { constants } from 'constants/constants';
import { FavButtonContainer, FavButton, FavIcon } from './FavoriteButton.styled';

const { icons } = constants;

const FavoriteButton = ({ favorite }) => {
  const [favoriteState, setFavoriteState] = useState(favorite);
  const [showNotLogged, setShowNotLogged] = useState(false);
  const userId = useSelector(selectAuthId);

  const toggleFavorite = () => {
    if (!userId) {
      setShowNotLogged(true);
      return;
    }
    setFavoriteState(favoriteState => !favoriteState);
    console.log('Favorite updated');
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
      {showNotLogged && (
        <PopUp message="You should be logged in" onClose={() => setShowNotLogged(false)} />
      )}
    </FavButtonContainer>
  );
};

FavoriteButton.propTypes = {
  favorite: PropTypes.bool.isRequired,
};

export default FavoriteButton;
