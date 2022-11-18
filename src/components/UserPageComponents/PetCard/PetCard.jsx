import {
  PetContainer,
  PetImageContainer,
  PetField,
  PetInfo,
  PetDelete,
  PetDeleteButton,
} from './PetCard.styled';

const PetCard = () => {
  const onPetRemove = () => {};

  return (
    <PetContainer>
      <PetImageContainer>
        <img src="" alt="" />
      </PetImageContainer>
      <PetInfo>
        <PetDelete>
          <PetField className="delete">Name: Jack</PetField>
          <PetDeleteButton onRemove={onPetRemove} />
        </PetDelete>
        <PetField>Date of birth: 22.04.2018</PetField>
        <PetField>Breed: 22.04.2018</PetField>
        <PetField>
          Comments: Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
        </PetField>
      </PetInfo>
    </PetContainer>
  );
};

export default PetCard;
