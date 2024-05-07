import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {

  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
    setSearchString('');
  }

  return (
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <TextInput value={searchString} onChange={e => setSearchString(e.target.value)} placeholder='Search…' />
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;