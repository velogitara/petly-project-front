import PropTypes from 'prop-types';
import { cloneElement } from 'react';
import { useState } from 'react';
import { LearnButton } from './LearnMoreButton.styled';

const LearnMoreButton = ({ noticeId, children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <LearnButton type="button" title="Learn more" onClick={() => setShowModal(true)}>
        learn more
      </LearnButton>
      {showModal && (
        <>
          {children ? (
            cloneElement(children, { onClose: () => setShowModal(false) })
          ) : (
            <p>{noticeId}</p>
          )}
        </>
      )}
    </>
  );
};

LearnMoreButton.propTypes = {
  noticeId: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default LearnMoreButton;
