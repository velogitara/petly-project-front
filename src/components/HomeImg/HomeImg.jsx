import React from 'react';
import { Image } from './HomeImg.styled';
import imageDesktop from '../../assets/images/hero-624.png';
import imageTablet from '../../assets/images/hero-699.png';
import imageMobile from '../../assets/images/hero-320.png';

const HomeImg = () => {
  return (
    <Image>
      <source srcSet={imageMobile} media="(max-width: 767px)" />
      <source srcSet={imageTablet} media="(max-width: 1279px)" />
      <source srcSet={imageDesktop} media="(min-width: 1280px)" />
      <img src={imageDesktop} alt="hero" />
    </Image>
  );
};

export default HomeImg;
