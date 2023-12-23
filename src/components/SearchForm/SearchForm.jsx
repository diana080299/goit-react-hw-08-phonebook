import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Box,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { FiUser } from 'react-icons/fi';

import {
  selectIsContactAdd,
  selectPhoneBookValue,
} from 'store/phoneBook/phoneSelector';
import { Notify } from 'notiflix';
import { postContactThunk } from 'service/fetchContacts';

export const SearchForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const phoneBook = useSelector(selectPhoneBookValue);
  const isContactAdd = useSelector(selectIsContactAdd);

  useEffect(() => {
    if (isContactAdd) {
      reset();
    }
  }, [isContactAdd]);

  const onSubmitAddContact = event => {
    event.preventDefault();
    const newObj = { name, number };

    if (isNameNew(phoneBook, newObj) !== undefined) {
      Notify.warning(`${newObj.name} is already in contacts`);
      return;
    }

    dispatch(postContactThunk(newObj));
  };

  const isNameNew = (phoneBook, newObj) => {
    return phoneBook.find(
      ({ name }) => name.toLowerCase() === newObj.name.toLowerCase()
    );
  };

  const onChangeInput = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box maxWidth="320px" padding="20px">
      <form onSubmit={onSubmitAddContact}>
        <FormControl>
          <FormLabel>
            Name
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FiUser color="gray" />
              </InputLeftElement>
              <Input
                variant="flushed"
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                onChange={onChangeInput}
                value={name}
              />
            </InputGroup>
          </FormLabel>
          <FormLabel>
            Number
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                variant="flushed"
                type="tel"
                name="number"
                required
                placeholder="Enter your number"
                onChange={onChangeInput}
                value={number}
                marginBottom="20px"
              />
            </InputGroup>
          </FormLabel>
          <Button type="submit" marginBottom="20px">
            Add contacts
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
