import PropTypes from 'prop-types';
import { useState } from 'react';
import { LearnButton } from './LearnMoreButton.styled';
import ModalNotice from 'components/ModalNotice';

const LearnMoreButton = ({ noticeId, favorite, owner }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <LearnButton type="button" title="Learn more" onClick={() => setShowModal(true)}>
        learn more
      </LearnButton>
      {showModal && (
        <ModalNotice
          noticeId={noticeId}
          favorite={favorite}
          owner={owner}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

LearnMoreButton.propTypes = {
  noticeId: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  owner: PropTypes.string.isRequired,
};

export default LearnMoreButton;
