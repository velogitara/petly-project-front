import PropTypes from 'prop-types';
import { DelButton, DelIcon } from './DeleteButton.styled';
import { constants } from 'constants/constants';

const { icons } = constants;

const DeleteButton = ({ translucent = false, title = '', onDelete }) => {
  return (
    <DelButton type="button" translucent={translucent} title={title} onClick={onDelete}>
      <DelIcon aria-label="Delete icon">
        <use href={`${icons}#icon-trashcan`} />
      </DelIcon>
    </DelButton>
  );
};

DeleteButton.propTypes = {
  translucent: PropTypes.bool,
  title: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
