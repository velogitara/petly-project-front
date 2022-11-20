import {
  AvatarContainer,
  ImageContainer,
  ImageLabel,
  ImageInput,
  SvgIcon,
  InputText,
} from './UserProfileAvatar.styled';
import { useUpdateUserInfoMutation } from 'redux/user';
import icons from '../../../assets/icons/icons.svg';

const UserProfileAvatar = ({ isEditing, onFieldEddited }) => {
  const [updateUserInfo, { isLoading, isError }] = useUpdateUserInfoMutation();

  const handleInputChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);

    // const user = { [id]: value };
    // // const formData = new FormData();
    // // formData.append('data', { ...user });
    // const parsedData = JSON.stringify(user);
    updateUserInfo({ file });
  };

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
      <ImageInput id="avatar" type="file" disabled={isEditing} onChange={handleInputChange} />
    </AvatarContainer>
  );
};

export default UserProfileAvatar;
