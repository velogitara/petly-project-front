import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useGetNoticeById } from 'hooks';
import { dateHandle, imageURLBuilder } from 'helpers';
import ModalCloseButton from '../ModalCloseButton/ModalCloseButton';
import FavoriteButton from 'components/FavoriteButton';
import DeleteButton from 'components/DeleteButton';
import {
  Backdrop,
  Modal,
  ModalInfo,
  ModalInfoImg,
  ImgPet,
  ImgLabel,
  InfoPet,
  InfoPetTitle,
  InfoPetList,
  InfoPetItem,
  InfoPetSpan,
  Comments,
  CommentsSpan,
  BtnContainer,
  AddToFaforite,
  Contact,
} from './ModalNotice.styled';

const modalRoot = document.querySelector('#modal-root');
const imageDummy = '';

const ModalNotice = ({ onClose, noticeId, favorite, owner, category }) => {
  const notice = useGetNoticeById({ noticeId });

  const birthDate = notice?.birthday ? new Date(dateHandle(notice?.birthday, 'parse')) : null;

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

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <ModalCloseButton onClose={onClose} />
        <ModalInfo>
          <ModalInfoImg>
            <ImgPet>
              <source
                srcSet={`${
                  notice?.imageURL ? imageURLBuilder(notice?.imageURL?.profileMobile) : ''
                } 240w, ${
                  notice?.imageURL ? imageURLBuilder(notice?.imageURL?.profileMobileRetina) : ''
                } 480w`}
                media="(max-width: 767px)"
                sizes="240px"
              />
              <source
                srcSet={`${
                  notice?.imageURL ? imageURLBuilder(notice?.imageURL?.profile) : ''
                } 288w, ${
                  notice?.imageURL ? imageURLBuilder(notice?.imageURL?.profileRetina) : ''
                } 576w`}
                media="(min-width: 768px)"
                sizes="288px"
              />
              <img
                src={notice?.imageURL ? imageURLBuilder(notice?.imageURL?.profile) : imageDummy}
                loading="lazy"
                alt={notice?.title}
              />
            </ImgPet>
            <ImgLabel>{category}</ImgLabel>
          </ModalInfoImg>

          <InfoPet>
            <InfoPetTitle>{notice?.title}</InfoPetTitle>
            <InfoPetList>
              <InfoPetItem>
                Name: <InfoPetSpan>{notice?.name}</InfoPetSpan>
              </InfoPetItem>
              {birthDate && (
                <InfoPetItem>
                  Birthday:{' '}
                  <InfoPetSpan>{`${birthDate.getDay()}.${
                    birthDate.getMonth() + 1
                  }.${birthDate.getFullYear()}`}</InfoPetSpan>
                </InfoPetItem>
              )}
              <InfoPetItem>
                Breed: <InfoPetSpan>{notice?.breed}</InfoPetSpan>
              </InfoPetItem>
              <InfoPetItem>
                Place: <InfoPetSpan>{notice?.location}</InfoPetSpan>
              </InfoPetItem>
              <InfoPetItem>
                The sex: <InfoPetSpan>{notice?.sex}</InfoPetSpan>
              </InfoPetItem>
              <InfoPetItem>
                Email: <InfoPetSpan>Rich</InfoPetSpan>
              </InfoPetItem>
              <InfoPetItem>
                Phone: <InfoPetSpan>Rich</InfoPetSpan>
              </InfoPetItem>
              {notice?.category === 'sell' && (
                <InfoPetItem>
                  Sell: <InfoPetSpan>{notice?.price}$</InfoPetSpan>
                </InfoPetItem>
              )}
            </InfoPetList>
          </InfoPet>
        </ModalInfo>
        <Comments>
          <CommentsSpan>Comments: </CommentsSpan>
          {notice?.comments}
        </Comments>
        <BtnContainer>
          <FavoriteButton favorite={favorite} noticeId={noticeId} />

          <DeleteButton translucent noticeId={noticeId} owner={owner} />

          <AddToFaforite>Add to</AddToFaforite>
          <Contact href="tel:123456789">Contact</Contact>
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
