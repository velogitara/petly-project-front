import icons from '../../assets/icons/icons.svg';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={s.paw}>
        <svg className={s.icon}>
          <use href={icons + '#paw'} />
        </svg>
      </div>
      <div className={s.paw}>
        <svg className={s.icon}>
          <use href={icons + '#paw'} />
        </svg>
      </div>
      <div className={s.paw}>
        <svg className={s.icon}>
          <use href={icons + '#paw'} />
        </svg>
      </div>
      <div className={s.paw}>
        <svg className={s.icon}>
          <use href={icons + '#paw'} />
        </svg>
      </div>
      <div className={s.paw}>
        <svg className={s.icon}>
          <use href={icons + '#paw'} />
        </svg>
      </div>
      <div className={s.paw}>
        <svg className={s.icon}>
          <use href={icons + '#paw'} />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
