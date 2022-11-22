import { PetContainer, PetImageContainer, PetField, PetInfo, PetDelete } from './PetCard.styled';
import { parseBirthday } from 'helpers';
import DeleteButton from 'components/DeleteButton';

const PetCard = ({ _id, name, birthday, breed, imageURL, comments, owner, screen }) => {
  return (
    <PetContainer>
      <PetImageContainer>
        <img src={imageURL ? imageURL.mobile : ''} alt={name} />
      </PetImageContainer>
      <PetInfo>
        <PetDelete>
          <PetField className="delete">Name: {name}</PetField>
          {screen === 'mobile' ? (
            <DeleteButton petId={_id} owner={owner} translucent className="user" />
          ) : (
            <DeleteButton petId={_id} owner={owner} className="user" />
          )}
        </PetDelete>
        <PetField>Date of birth: {birthday ? parseBirthday(birthday) : '00.00.0000'}</PetField>
        <PetField>Breed: {breed}</PetField>
        <PetField>Comments: {comments}</PetField>
      </PetInfo>
    </PetContainer>
  );
};

export default PetCard;
