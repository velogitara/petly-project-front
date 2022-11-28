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
import defaultAvatar from '../../../assets/images/defaultAvatar-233.png';
import defaultAvatarRetina from '../../../assets/images/defaultAvatar-233_retina.png';
import ImageLoader from '../ImageLoader';

const UserProfileAvatar = ({ name, avatarURL, isEditing }) => {
  const [updateUserInfo, { isLoading }] = useUpdateUserInfoMutation();

  const MAX_FILE_SIZE = 5242880;

  const handleInputChange = async e => {
    const file = e.target.files[0];

    if (file.size > MAX_FILE_SIZE) {
      toast.error('This file is too big, choose something else');
      return;
    }

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
      {isLoading && <ImageLoader />}
      <ImageContainer>
        <UserPicture>
          <source
            srcSet={`${avatarURL ? imageURLBuilder(avatarURL?.profile) : defaultAvatar} 233w, ${
              avatarURL ? imageURLBuilder(avatarURL?.profile_retina) : defaultAvatarRetina
            } 466w`}
            media="(min-width: 320px)"
            sizes="233px"
          />
          <img
            src={avatarURL ? imageURLBuilder(avatarURL?.profile) : defaultAvatar}
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
      <ImageInput
        id="avatar"
        type="file"
        disabled={isEditing}
        onChange={handleInputChange}
        accept={'.jpg, .jpeg, .png'}
      />
    </AvatarContainer>
  );
};

export default UserProfileAvatar;
