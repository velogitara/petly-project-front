import {
  PetContainer,
  PetImageContainer,
  PetField,
  PetInfo,
  PetDelete,
  PetPicture,
} from './PetCard.styled';
import { imageURLBuilder } from 'helpers';
import { parseBirthday } from 'helpers';
import DeleteButton from 'components/DeleteButton';
import defaultImageMobile from '../../../assets/images/defaultPet-240.png';
import defaultImageMobileRetina from '../../../assets/images/defaultPet-240_retina.png';
import defaultImageTablet from '../../../assets/images/defaultPet-160.png';
import defaultImageTabletRetina from '../../../assets/images/defaultPet-160_retina.png';

const PetCard = ({ _id, name, birthday, breed, imageURL, comments, owner, screen }) => {
  return (
    <PetContainer>
      <PetImageContainer>
        <PetPicture>
          <source
            srcSet={`${imageURL ? imageURLBuilder(imageURL?.mobile) : defaultImageMobile} 240w, ${
              imageURL ? imageURLBuilder(imageURL?.mobile_retina) : defaultImageMobileRetina
            } 480w`}
            media="(max-width: 767px)"
            sizes="240px"
          />
          <source
            srcSet={`${imageURL ? imageURLBuilder(imageURL?.tablet) : defaultImageTablet} 161w, ${
              imageURL ? imageURLBuilder(imageURL?.tablet_retina) : defaultImageTabletRetina
            } 322w`}
            media="(min-width: 768px)"
            sizes="161px"
          />
          <img
            src={imageURL ? imageURLBuilder(imageURL?.tablet) : defaultImageTabletRetina}
            loading="lazy"
            alt={name}
          />
        </PetPicture>
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
