import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useGetNoticeById } from 'hooks';
import { imageURLBuilder } from 'helpers';
import ModalCloseButton from '../ModalCloseButton/ModalCloseButton';
import FavoriteButton from 'components/FavoriteButton';
import DeleteButton from 'components/DeleteButton';
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
const imageDummy = '';

const ModalNotice = ({ onClose, noticeId, favorite, owner, category }) => {
  const notice = useGetNoticeById({ noticeId });

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

  if (!notice) {
    return <p>Loading...</p>;
  }

  const {
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
        <DeleteBtnContainer>
          <DeleteButton translucent noticeId={noticeId} owner={owner} />
        </DeleteBtnContainer>
        <ModalCloseButton onClose={onClose} />
        <ModalInfo>
          <ModalInfoImg>
            <PicturePet>
              <source
                srcSet={`${imageURL ? imageURLBuilder(imageURL?.profileMobile) : ''} 240w, ${
                  imageURL ? imageURLBuilder(imageURL?.profileMobileRetina) : ''
                } 480w`}
                media="(max-width: 767px)"
                sizes="240px"
              />
              <source
                srcSet={`${imageURL ? imageURLBuilder(imageURL?.profile) : ''} 288w, ${
                  imageURL ? imageURLBuilder(imageURL?.profileRetina) : ''
                } 576w`}
                media="(min-width: 768px)"
                sizes="288px"
              />
              <ImgPet
                src={imageURL ? imageURLBuilder(imageURL?.profile) : imageDummy}
                loading="lazy"
                alt={notice?.title}
              />
            </PicturePet>
            <ImgLabel>{category}</ImgLabel>
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
          <Contact href={`tel:${phone}`}>Contact</Contact>
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
