import { Box, Button, Heading, Image } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'store/auth/authSelector';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <Box>
      <Box marginTop="30px">
        {isLoggedIn ? (
          <Box display="block">
            <Heading as="h3" size="lg">
              Hello, {user.email}! &#129303;
            </Heading>
            <br />
            <Heading as="h4" size="md">
              Welcome to your phonebook.&#128211;
            </Heading>
            <Box>
              <Image src="/img/phonebook.jpeg" />
            </Box>
          </Box>
        ) : (
          <Box>
            <Heading as="h3" size="lg" marginBottom="20px">
              Hello! I'm your phonebook.{' '}
            </Heading>
            <Heading as="h4" size="md" marginBottom="20px">
              Please log in to your account or register.
            </Heading>
            <Button colorScheme="teal" variant="outline">
              <NavLink to="/login">Sign In</NavLink>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Home;
