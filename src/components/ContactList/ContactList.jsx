import { useEffect } from 'react';
import * as React from 'react';

import { Contact } from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectPhoneBookValue } from 'store/phoneBook/phoneSelector';
import { selectFilter } from 'store/myFilterSlice';
import { getContactsThunk } from 'service/fetchContacts';
import { Heading } from '@chakra-ui/react';

export const ContactList = () => {
  const dispatch = useDispatch();

  const phoneBook = useSelector(selectPhoneBookValue);
  const filterPhoneBook = useSelector(selectFilter);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const lowerFilter = filterPhoneBook.toLowerCase();
  const visibleContacts = phoneBook.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );

  return (
    <div>
      <Heading as="h3" size="md" margin="20px">
        Your Contacts
      </Heading>
      <>
        {visibleContacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </>
    </div>
  );
};
