import {
  PetContainer,
  PetImageContainer,
  PetField,
  PetInfo,
  PetDelete,
  PetDeleteButton,
} from './PetCard.styled';

const PetCard = ({ _id, name, birthday, breed, imageURL, comments, owner }) => {
  const onPetRemove = () => {};

  return (
    <PetContainer>
      <PetImageContainer>
        <img src={imageURL ? imageURL.mobile : ''} alt={name} />
      </PetImageContainer>
      <PetInfo>
        <PetDelete>
          <PetField className="delete">Name: {name}</PetField>
          <PetDeleteButton petId={_id} owner={owner} />
        </PetDelete>
        <PetField>Date of birth: {birthday ?? '00.00.0000'}</PetField>
        <PetField>Breed: {breed}</PetField>
        <PetField>Comments: {comments}</PetField>
      </PetInfo>
    </PetContainer>
  );
};

export default PetCard;
