import React from 'react';
import { Image } from './HomeImg.styled';
import imageDesktop from '../../assets/images/hero-624.png';
import imageDesktopR from '../../assets/images/hero-624@2x.png';
import imageTablet from '../../assets/images/hero-699.png';
import imageTabletR from '../../assets/images/hero-699@2x.png';
import imageMobile from '../../assets/images/hero-320.png';
import imageMobileR from '../../assets/images/hero-320@2x.png';

const HomeImg = () => {
  return (
    <Image>
      <source srcSet={(imageMobileR, imageMobile)} media="(max-width: 767px)" type="image/png" />
      <source srcSet={(imageTabletR, imageTablet)} media="(max-width: 1279px)" type="image/png" />
      <source srcSet={(imageDesktopR, imageDesktop)} media="(min-width: 1280px)" type="image/png" />
      <img src={imageDesktop} alt="hero" />
    </Image>
  );
};

export default HomeImg;
