import icons from '../../assets/icons/icons.svg';
import { ButtonClose, SvgClose } from './ModalCloseButton.styled';

function ModalCloseButton({ onClose, styled }) {
  return (
    <ButtonClose
      className={styled}
      onClick={() => {
        onClose();
        document.body.style.position = 'unset';
      }}
    >
      <SvgClose>
        <use href={icons + '#icon-close'} />
      </SvgClose>
    </ButtonClose>
  );
}

// ------------------------------//
// <ModalCloseButton styled={big}
// <ModalCloseButton styled={small}
export default ModalCloseButton;
