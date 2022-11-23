import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Menu from 'components/Menu';
import { Main } from './SharedLayout.styled';
import { useState, useEffect } from 'react';

const SharedLayout = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleClick = () => {
    setIsMenu(!isMenu);
    document.body.classList.toggle('lock');
  };

  const handleMenuCloseClick = () => {
    setIsMenu(false);
    document.body.classList.remove('lock');
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <>
      <Header onWidth={width} onOpenMenu={handleClick} onCloseMenu={handleMenuCloseClick} />
      <Main>
        {isMenu && width < 1280 && <Menu onWidth={width} />}
        <Outlet />
      </Main>
    </>
  );
};

export default SharedLayout;
