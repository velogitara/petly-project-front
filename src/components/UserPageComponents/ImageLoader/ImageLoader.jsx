import icons from '../../../assets/icons/icons.svg';
import s from './ImageLoader.module.css';

const ImageLoader = () => {
  return (
    <div className={s.loader}>
      <div className={s.paw}>
        <svg className={s.icon}>
          <use href={icons + '#paw'} />
        </svg>
      </div>
    </div>
  );
};

export default ImageLoader;
