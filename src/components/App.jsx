import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { SearchForm } from './SearchForm/SearchForm';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import SignUp from 'pages/SighUp';
import SignIn from 'pages/SingIn';
import Contacts from 'pages/Contacs';

export const App = () => {
  const theme = extendTheme({
    colors: {
      brand: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
    },
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignUp />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<SignIn />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute redirectTo="/login" component={<HomePage />} />
            }
          />
        </Route>
      </Routes>
      {/* <AppBar />
      <ChakraProvider theme={theme}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <SearchForm />
          <Filter />
        </Box>
        <ContactList />
      </ChakraProvider> */}
    </>
  );
};
