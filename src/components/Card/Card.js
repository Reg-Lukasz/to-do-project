import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = props => {

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id))
  }

  return(
    <li className={styles.card}>
      {props.title}
      <button onClick={toggleFavorite} className={styles.favorite}>
        <i className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}></i>
      </button>
    </li>
  );
};

export default Card;