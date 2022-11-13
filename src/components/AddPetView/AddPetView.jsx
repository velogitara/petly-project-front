import { useState } from 'react';
import ModalAddNotice from 'components/ModalAddNotice/ModalAddNotice';

function AddPetView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div>
      <button onClick={toggleModal}>+</button>
      {isModalOpen && <ModalAddNotice onClose={toggleModal} />}
    </div>
  );
}

export default AddPetView;
