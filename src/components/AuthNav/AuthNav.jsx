import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { GiEntryDoor } from 'react-icons/gi';

const AuthNav = () => {
  return (
    <Box display="flex" marginLeft="auto" gap="10px">
      <Button colorScheme="teal" variant="outline">
        <NavLink to="/register">Registration</NavLink>
      </Button>
      <Button colorScheme="teal" variant="outline">
        <GiEntryDoor />
        <NavLink to="/login">LogIn</NavLink>
      </Button>
    </Box>
  );
};

export default AuthNav;
