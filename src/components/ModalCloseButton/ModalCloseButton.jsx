import icons from '../../assets/icons/icons.svg';
import { ButtonClose, SvgClose } from './ModalCloseButton.styled';

function ModalCloseButton({ onClose }) {
  return (
    <ButtonClose
      onClick={() => {
        onClose();
      }}
    >
      <SvgClose>
        <use href={icons + '#icon-close'} />
      </SvgClose>
    </ButtonClose>
  );
}

export default ModalCloseButton;
