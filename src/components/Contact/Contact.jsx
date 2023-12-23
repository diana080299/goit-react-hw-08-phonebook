import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { delContactThunk } from 'service/fetchContacts';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(delContactThunk(contactId));
  };

  return (
    <Box
      display="flex"
      alignItems="baseline"
      gap="10px"
      boxShadow="base"
      p="6"
      rounded="md"
      bg="white"
      margin="12px"
      maxWidth="fit-content"
    >
      <Text as="b">
        {name}: {number}
      </Text>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => deleteContact(id)}
      >
        Delete
      </Button>
    </Box>
  );
};
