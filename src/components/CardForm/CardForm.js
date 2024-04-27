import { useState } from 'react';
import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';

const CardForm = props => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const columnId = props.columnId;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard({ columnId, title }));
    setTitle('');
  };

  return(
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)}/>
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;