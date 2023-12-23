import { Box, Button, Heading } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { postLogOutThunk } from 'service/fetchAuth';
import { selectUser } from 'store/auth/authSelector';
import { IoExitOutline } from 'react-icons/io5';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box display="flex" marginLeft="auto" gap="10px" alignItems="baseline">
      <Heading as="h4" size="md">
        Welcome, {user.email}!
      </Heading>
      <Button
        leftIcon={<IoExitOutline />}
        colorScheme="teal"
        variant="solid"
        type="button"
        onClick={() => dispatch(postLogOutThunk())}
      >
        LogOut
      </Button>
    </Box>
  );
};

export default UserMenu;
