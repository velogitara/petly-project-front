import icons from 'assets/icons/icons.svg';
import s from './ImageLoader.module.css';
import { Loader, Paw, Svg } from './ImageLoader.styled';

const ImageLoader = () => {
  return (
    <Loader>
      <Paw className={s.paw}>
        <Svg className={s.icon}>
          <use href={icons + '#paw'} />
        </Svg>
      </Paw>
    </Loader>
  );
};

export default ImageLoader;
