import { constants } from 'constants/constants';
import { ThemeBtn, ThemeIcon } from './ThemeButton.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleTheme, selectThemeValue } from 'redux/theme';

const { icons } = constants;

const ThemeButton = () => {
  const [theme, setTheme] = useState(useSelector(selectThemeValue));
  const dispatch = useDispatch();

  const toggleThemeState = () => {
    dispatch(toggleTheme());
    setTheme(theme => !theme);
  };

  return (
    <ThemeBtn
      type="button"
      title={`Toggle theme to ${theme ? 'Light' : 'Dark'}`}
      onClick={toggleThemeState}
    >
      <ThemeIcon aria-label="theme icon">
        <use href={`${icons}#icon-${theme ? 'moon' : 'sun'}`} />
      </ThemeIcon>
    </ThemeBtn>
  );
};

export default ThemeButton;
