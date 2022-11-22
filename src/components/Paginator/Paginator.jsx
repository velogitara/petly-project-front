import { useState } from 'react';
import Button from 'components/Button';
import paw from '../../assets/icons/paw.svg';
import { PaginatorContainer } from './Paginator.styled';

const Paginator = () => {
  const [showNextButton] = useState(true);
  const [showPrevButton] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  function onLoadMoreBtnClick(step) {
    setCurrentPage(prevState => prevState + step);
  }

  return (
    <PaginatorContainer>
      {showPrevButton && (
        <Button title="<" styled="news" onClick={e => onLoadMoreBtnClick(-1)}></Button>
      )}
      <p>{currentPage}</p>
      {showNextButton && (
        <Button title=">" styled="news" onClick={e => onLoadMoreBtnClick(1)}></Button>
      )}
    </PaginatorContainer>
  );
};

export default Paginator;
