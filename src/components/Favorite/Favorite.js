import { useSelector } from "react-redux";
import PageTitle from "../PageTitle/PageTitle";
import { getFavoriteCards } from "../../redux/cardsRedux";
import styles from './Favorite.module.scss';
import Card from '../Card/Card';
import { Navigate } from "react-router-dom";

const Favorite = () => {
  const cards = useSelector(state => getFavoriteCards(state, true));

  if (!cards.length) return <Navigate to='/' />

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />)}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;