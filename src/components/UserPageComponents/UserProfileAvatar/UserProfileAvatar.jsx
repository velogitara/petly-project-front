import {
  AvatarContainer,
  ImageContainer,
  UserPicture,
  ImageLabel,
  ImageInput,
  SvgIcon,
  InputText,
} from './UserProfileAvatar.styled';
import { toast } from 'react-toastify';
import { useUpdateUserInfoMutation } from 'redux/user';
import { imageURLBuilder } from 'helpers';
import icons from '../../../assets/icons/icons.svg';

const UserProfileAvatar = ({ name, avatarURL, isEditing }) => {
  const [updateUserInfo] = useUpdateUserInfoMutation();

  const handleInputChange = async e => {
    const file = e.target.files[0];
    const payload = new FormData();
    payload.append('image', file);
    try {
      await updateUserInfo({ payload }).then(response => {
        if (response?.status !== 200) {
          toast.error(response.error?.data?.message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AvatarContainer>
      <ImageContainer>
        <UserPicture>
          <source
            srcSet={`${avatarURL ? imageURLBuilder(avatarURL?.profile) : ''} 233w, ${
              avatarURL ? imageURLBuilder(avatarURL?.profile_retina) : ''
            } 466w`}
            media="(min-width: 320px)"
            sizes="233px"
          />
          <img
            src={avatarURL ? imageURLBuilder(avatarURL?.profile) : ''}
            loading="lazy"
            alt={name}
          />
        </UserPicture>
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
