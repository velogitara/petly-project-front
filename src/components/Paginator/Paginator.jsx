import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { PaginatorContainer, PaginatorButton, ArrowIcon } from './Paginator.styled';

const Paginator = ({ totalPages = 10, viewedPages = 5, onPageSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showNextButton, setShowNextButton] = useState(totalPages > 1);
  const [showPrevButton, setShowPrevButton] = useState(currentPage > 1);

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
  }, [currentPage, totalPages, onPageSelect]);

  if (totalPages === 1) {
    return <></>;
  }

  const diff = totalPages - viewedPages;

  let viewField = viewedPages;
  if (diff < 0) {
    viewField = viewedPages - 2 + diff;
  } else if (diff === 0) {
    viewField = viewedPages - 2;
  } else if (diff === 1) {
    viewField = viewedPages - 1;
  }

  let shift;
  if (currentPage === 1 || diff <= 0) {
    shift = 2;
  } else if (diff > 0 && currentPage >= diff) {
    shift = diff === 1 ? diff + 1 : diff;
  } else {
    shift = currentPage;
  }

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
      {showPrevButton && diff <= 0 && (
        <PaginatorButton title="Previous page" onClick={() => onArrowClick(-1)}>
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

      {showPrevButton && diff > 0 && (
        <PaginatorButton title="Previous page" onClick={() => onArrowClick(-1)}>
          <ArrowIcon />
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
      {showNextButton && diff > 0 && (
        <PaginatorButton title="Next page" onClick={() => onArrowClick(1)}>
          <ArrowIcon next />
        </PaginatorButton>
      )}

      <PaginatorButton
        title="Last page"
        onClick={() => onPageClick(totalPages)}
        current={currentPage === totalPages}
      >
        {totalPages}
      </PaginatorButton>
      {showNextButton && diff <= 0 && (
        <PaginatorButton title="Next page" onClick={() => onArrowClick(1)}>
          <ArrowIcon next />
        </PaginatorButton>
      )}
    </PaginatorContainer>
  );
};

Paginator.propTypes = {
  totalPages: PropTypes.number,
  viewedPages: PropTypes.number,
  onPageSelect: PropTypes.func.isRequired,
};

export default Paginator;
