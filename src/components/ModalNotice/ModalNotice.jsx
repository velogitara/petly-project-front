import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalCloseButton from '../ModalCloseButton/ModalCloseButton';
import FavoriteButton from 'components/FavoriteButton';
import DeleteButton from 'components/DeleteButton';
import { ownerCheck } from 'helpers';
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

const ModalNotice = ({ onClose, _id, favorite, owner }) => {
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
  const userId = '636e250a3fc8cdfd9b8f0cba'; // hardcode to remove

  const removeNotice = ({ noticeId }) => {
    console.log(noticeId);
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <ModalCloseButton onClose={onClose} />
        <ModalInfo>
          <ModalInfoImg>
            <ImgPet src="" alt="" width="240" height="240" />
            <ImgLabel>In good hands</ImgLabel>
          </ModalInfoImg>

          <InfoPet>
            <InfoPetTitle>Сute dog looking for a home</InfoPetTitle>
            <InfoPetList>
              <InfoPetItem>
                Name: <InfoPetSpan>Rich</InfoPetSpan>
              </InfoPetItem>
              <InfoPetItem>
                Birthday: <InfoPetSpan>Rich</InfoPetSpan>
              </InfoPetItem>
              <InfoPetItem>
                Breed: <InfoPetSpan>Rich</InfoPetSpan>
              </InfoPetItem>
              <InfoPetItem>
                Place: <InfoPetSpan>Rich</InfoPetSpan>
              </InfoPetItem>
              <InfoPetItem>
                The sex: <InfoPetSpan>Rich</InfoPetSpan>
              </InfoPetItem>
              <InfoPetItem>
                Email: <InfoPetSpan>Rich</InfoPetSpan>
              </InfoPetItem>
              <InfoPetItem>
                Phone: <InfoPetSpan>Rich</InfoPetSpan>
              </InfoPetItem>
            </InfoPetList>
          </InfoPet>
        </ModalInfo>
        <Comments>
          <CommentsSpan>Comments:</CommentsSpan>
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
          ipsum dolor sit amet, consectetur Lorem
        </Comments>
        <BtnContainer>
          <FavoriteButton favorite={favorite} />
          {ownerCheck({ userId, noticeOwner: owner }) && (
            <DeleteButton translucent onRemove={() => removeNotice({ noticeId: _id })} />
          )}

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
};

export default ModalNotice;
