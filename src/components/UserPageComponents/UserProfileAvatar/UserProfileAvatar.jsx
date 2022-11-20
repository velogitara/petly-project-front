import {
  AvatarContainer,
  ImageContainer,
  ImageLabel,
  ImageInput,
  SvgIcon,
  InputText,
} from './UserProfileAvatar.styled';
import icons from '../../../assets/icons/icons.svg';

const UserProfileAvatar = ({ isEditing, onFieldEddited }) => {
  return (
    <AvatarContainer>
      <ImageContainer>
        <img src="" alt="" />
      </ImageContainer>
      <ImageLabel htmlFor="avatar">
        <SvgIcon>
          <use href={`${icons}#icon-camera`}></use>
        </SvgIcon>
        <InputText>Edit photo</InputText>
      </ImageLabel>
      <ImageInput id="avatar" type="file" disabled={isEditing} />
    </AvatarContainer>
  );
};

export default UserProfileAvatar;
