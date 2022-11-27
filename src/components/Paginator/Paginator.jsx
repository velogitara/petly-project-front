import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { PaginatorContainer, PaginatorButton, ArrowIcon, Ellipsis } from './Paginator.styled';

const Paginator = ({ totalPages = 1, viewedPages = 5, onPageSelect, startPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(startPage);
  const [showNextButton, setShowNextButton] = useState(totalPages > 1);
  const [showPrevButton, setShowPrevButton] = useState(currentPage > 1);
  const [showForwardEllipsis, setShowForwardEllipsis] = useState(false);
  const [showBackwardEllipsis, setShowBackwardEllipsis] = useState(false);

  const difference = totalPages - viewedPages;

  useEffect(() => {
    if (startPage === 1) {
      setCurrentPage(1);
    }
  }, [startPage]);

  useEffect(() => {
    if (currentPage === 1) {
      setShowPrevButton(false);
    } else if (totalPages > 1) {
      setShowPrevButton(true);
    }
    if (currentPage === totalPages) {
      setShowNextButton(false);
    } else if (totalPages > 1) {
      setShowNextButton(true);
    }
    onPageSelect({ currentPage });
  }, [currentPage, totalPages, onPageSelect, startPage]);

  useEffect(() => {
    if (difference > 2 && currentPage > 2) {
      setShowBackwardEllipsis(true);
    } else {
      setShowBackwardEllipsis(false);
    }
  }, [showBackwardEllipsis, difference, currentPage]);

  useEffect(() => {
    if (difference > 2 && currentPage < totalPages - 1) {
      setShowForwardEllipsis(true);
    } else {
      setShowForwardEllipsis(false);
    }
  }, [showForwardEllipsis, difference, currentPage, totalPages]);

  if (totalPages <= 1) {
    return null;
  }

  let viewField = viewedPages;
  if (difference < 0) {
    viewField = viewedPages - 2 + difference;
  } else if (difference === 0) {
    viewField = viewedPages - 2;
  } else if (difference === 1) {
    viewField = viewedPages - 1;
  }

  let shift;
  if (currentPage === 1 || difference <= 0) {
    shift = 2;
  } else if (difference > 0 && currentPage >= difference) {
    shift = difference === 1 ? difference + 1 : difference;
  } else {
    shift = currentPage;
  }

  const stepBackward = currentPage > viewedPages ? viewedPages : Math.floor(currentPage / 2);
  const stepForward =
    currentPage < totalPages - viewedPages
      ? viewedPages
      : Math.floor((totalPages - currentPage + 1) / 2);

  const pages = [
    ...Array(viewField)
      .fill()
      .map((_, i) => i + shift),
  ];

  const onArrowClick = step => {
    setCurrentPage(prevState => prevState + step);
  };

  const onPageClick = page => {
    setCurrentPage(page);
  };

  return (
    <PaginatorContainer>
      {showPrevButton && (
        <PaginatorButton title="Previous page" onClick={() => onArrowClick(-1)} secondary>
          <ArrowIcon />
        </PaginatorButton>
      )}
      <PaginatorButton
        title="First page"
        onClick={() => onPageClick(1)}
        current={currentPage === 1}
      >
        {1}
      </PaginatorButton>
      {showBackwardEllipsis && (
        <PaginatorButton
          title={`${stepBackward} pages backward`}
          onClick={() => onArrowClick(stepBackward * -1)}
          secondary
        >
          <Ellipsis>...</Ellipsis>
        </PaginatorButton>
      )}
      {pages.map(page => (
        <PaginatorButton
          title={page === currentPage ? 'Current page' : `Page ${page}`}
          onClick={() => onPageClick(page)}
          current={page === currentPage}
          key={page}
        >
          {page}
        </PaginatorButton>
      ))}
      {showForwardEllipsis && (
        <PaginatorButton
          title={`${stepForward} pages forward`}
          onClick={() => onArrowClick(stepForward)}
          secondary
        >
          <Ellipsis>...</Ellipsis>
        </PaginatorButton>
      )}

      <PaginatorButton
        title="Last page"
        onClick={() => onPageClick(totalPages)}
        current={currentPage === totalPages}
      >
        {totalPages}
      </PaginatorButton>
      {showNextButton && (
        <PaginatorButton title="Next page" onClick={() => onArrowClick(1)} secondary>
          <ArrowIcon next />
        </PaginatorButton>
      )}
    </PaginatorContainer>
  );
};

Paginator.propTypes = {
  totalPages: PropTypes.number.isRequired,
  viewedPages: PropTypes.number,
  onPageSelect: PropTypes.func.isRequired,
  startPage: PropTypes.number,
};

export default Paginator;
