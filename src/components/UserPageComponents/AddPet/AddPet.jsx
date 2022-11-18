import { Container, AddPetLink, AddPetText, SvgIcon } from './AddPet.styled';
import icons from '../../../assets/icons/icons.svg';

const AddPet = () => {
  return (
    <Container>
      <AddPetText>Add pet</AddPetText>
      <AddPetLink to="add pet">
        <SvgIcon>
          <use href={`${icons}#icon-plus`}></use>
        </SvgIcon>
      </AddPetLink>
    </Container>
  );
};

export default AddPet;
