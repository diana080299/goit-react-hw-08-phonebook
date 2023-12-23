import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/auth/authSelector';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const theme = extendTheme({
    colors: { blue: '#000000' },
    fonts: {
      body: 'system-ui, sans-serif',
      heading: 'Georgia, serif',
      mono: 'Menlo, monospace',
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Box
        display="flex"
        alignItems="baseline"
        backgroundColor="#BEE3F8"
        padding="10px"
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </ChakraProvider>
  );
};

export default AppBar;
