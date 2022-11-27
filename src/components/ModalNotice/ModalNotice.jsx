import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useGetNoticeById } from 'hooks';
import { categoryTitleHandler } from 'helpers';
import ModalCloseButton from '../ModalCloseButton/ModalCloseButton';
import FavoriteButton from 'components/FavoriteButton';
import DeleteButton from 'components/DeleteButton';
import { constants } from 'constants/constants';
import {
  Backdrop,
  Modal,
  ModalInfo,
  ModalInfoImg,
  PicturePet,
  ImgPet,
  ImgLabel,
  InfoPet,
  InfoPetTitle,
  InfoPetList,
  InfoPetItem,
  InfoPetText,
  Comments,
  CommentsSpan,
  BtnContainer,
  DeleteBtnContainer,
  Contact,
} from './ModalNotice.styled';

const modalRoot = document.querySelector('#modal-root');
const { noImage } = constants;

const ModalNotice = ({ onClose, noticeId, favorite, owner }) => {
  const { notice, isSuccess } = useGetNoticeById({ noticeId });

  useEffect(() => {
    const handleEscKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKeyDown);
    return () => {
      window.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  if (!isSuccess) {
    return 'Loading...';
  }

  const {
    category,
    name,
    imageURL,
    title,
    birthday,
    breed,
    location,
    sex,
    comments,
    price,
    owner: { email, phone },
  } = notice;

  const categoryTitle = categoryTitleHandler(category);

  const parseBirthday = () => {
    if (!birthday) {
      return null;
    }

    const [year, month, day] = birthday.slice(0, 10).split('-');
    return `${day}.${month}.${year}`;
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <ModalCloseButton styled="small" onClose={onClose} />
        <ModalInfo>
          <ModalInfoImg>
            <PicturePet>
              <source
                srcSet={`${imageURL ? imageURL?.profileMobile : noImage.profileMobile} 240w, ${
                  imageURL ? imageURL?.profileMobileRetina : noImage.profileMobileRetina
                } 480w`}
                media="(max-width: 767px)"
                sizes="240px"
              />
              <source
                srcSet={`${imageURL ? imageURL?.profile : noImage.profile} 288w, ${
                  imageURL ? imageURL?.profileRetina : noImage.profileRetina
                } 576w`}
                media="(min-width: 768px)"
                sizes="288px"
              />
              <ImgPet
                src={imageURL ? imageURL?.profile : noImage.profile}
                loading="lazy"
                alt={notice?.title}
              />
            </PicturePet>
            <ImgLabel>{categoryTitle}</ImgLabel>
            <DeleteBtnContainer>
              <DeleteButton translucent noticeId={noticeId} owner={owner} />
            </DeleteBtnContainer>
          </ModalInfoImg>

          <InfoPet>
            <InfoPetTitle>{title}</InfoPetTitle>
            <InfoPetList>
              <InfoPetItem>
                <InfoPetText>Name: </InfoPetText>
                <InfoPetText>{name}</InfoPetText>
              </InfoPetItem>
              {birthday && (
                <InfoPetItem>
                  <InfoPetText>Birthday: </InfoPetText>
                  <InfoPetText>{parseBirthday(birthday)}</InfoPetText>
                </InfoPetItem>
              )}
              <InfoPetItem>
                <InfoPetText>Breed: </InfoPetText>
                <InfoPetText>{breed}</InfoPetText>
              </InfoPetItem>
              <InfoPetItem>
                <InfoPetText>Place: </InfoPetText>
                <InfoPetText>{location}</InfoPetText>
              </InfoPetItem>
              <InfoPetItem>
                <InfoPetText>The sex: </InfoPetText>
                <InfoPetText>{sex}</InfoPetText>
              </InfoPetItem>
              <InfoPetItem>
                <InfoPetText>Email: </InfoPetText>
                <InfoPetText>{email}</InfoPetText>
              </InfoPetItem>
              <InfoPetItem>
                <InfoPetText>Phone: </InfoPetText>
                <InfoPetText>{phone}</InfoPetText>
              </InfoPetItem>
              {category === 'sell' && (
                <InfoPetItem>
                  <InfoPetText>Sell: </InfoPetText>
                  <InfoPetText>{price}$</InfoPetText>
                </InfoPetItem>
              )}
            </InfoPetList>
          </InfoPet>
        </ModalInfo>
        <Comments>
          <CommentsSpan>Comments: </CommentsSpan>
          {comments}
        </Comments>
        <BtnContainer>
          <FavoriteButton favorite={favorite} noticeId={noticeId} modal label />
          <Contact type="button" href={`tel:${phone}`}>
            Contact
          </Contact>
        </BtnContainer>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

ModalNotice.propTypes = {
  onClose: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired,
  noticeId: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default ModalNotice;
