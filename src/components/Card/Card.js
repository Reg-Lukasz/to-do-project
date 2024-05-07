import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import clsx from 'clsx';

const Card = props => {

  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(toggleCardFavorite(props.id))
  }

  const deleteCard = () => {
    dispatch(removeCard(props.id))
  }

  return(
    <li className={styles.card}>
      {props.title}
      <div>
        <button onClick={toggleFavorite} className={styles.favorite}>
          <i className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}></i>
        </button>
        <button onClick={deleteCard} className={styles.favorite}>
          <i className={"fa fa-trash"}></i>
        </button>
      </div>
    </li>
  );
};

export default Card;