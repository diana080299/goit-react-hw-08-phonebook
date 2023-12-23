import { Box, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'store/auth/authSelector';
import { IoHomeOutline } from 'react-icons/io5';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box display="flex" gap="10px">
      <Button colorScheme="teal" variant="outline">
        <IoHomeOutline />

        <NavLink to="/">Home</NavLink>
      </Button>
      {isLoggedIn && (
        <Button colorScheme="teal" variant="outline">
          {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </Button>
      )}
    </Box>
  );
};

export default Navigation;
