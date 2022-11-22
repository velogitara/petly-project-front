import icons from '../../assets/icons/icons.svg';
import { ButtonClose, SvgClose } from './ModalCloseButton.styled';

function ModalCloseButton({ onClose }) {
  return (
    <ButtonClose
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

export default ModalCloseButton;
