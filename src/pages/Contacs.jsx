import { ContactList } from 'components/ContactList/ContactList';
import Error from 'components/Error/Error';
import { Filter } from 'components/Filter/Filter';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useSelector } from 'react-redux';
import { selectError } from 'store/auth/authSelector';
import {
  selectIsLoading,
  selectPhoneBookValue,
} from 'store/phoneBook/phoneSelector';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const phoneBook = useSelector(selectPhoneBookValue);

  return (
    <>
      <div>
        <SearchForm />
        <Filter />
        {error ? <Error /> : <ContactList />}

        {phoneBook.length === 0 && !error && !isLoading && (
          <h1> You don't have any contacts yet</h1>
        )}
      </div>
    </>
  );
};
export default Contacts;
