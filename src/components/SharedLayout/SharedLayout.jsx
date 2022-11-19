import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Menu from 'components/Menu';
import { Main } from './SharedLayout.styled';
import { useState, useEffect } from 'react';

const SharedLayout = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  // const location = useLocation().pathname;
  // const [path, setPath] = useState(location);

  const handleClick = () => {
    setIsMenu(!isMenu);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  });

  return (
    <>
      <Header onWidth={width} onOpenMenu={handleClick} />
      <Main>
        {isMenu && width < 1280 && <Menu onWidth={width} />}
        <Outlet />
      </Main>
    </>
  );
};

export default SharedLayout;
