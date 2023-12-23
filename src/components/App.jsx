import { Route, Routes } from 'react-router-dom';

import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { getCurrentUserThunk } from 'service/fetchAuth';

const Home = lazy(() => import('pages/Home'));
const SignIn = lazy(() => import('pages/SingIn'));
const SignUp = lazy(() => import('pages/SighUp'));
const Contacts = lazy(() => import('pages/Contacs'));

export const App = () => {
  const theme = extendTheme({
    colors: {
      brand: {
        100: '#2699e5',
        // ...
        900: '#1a202c',
      },
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <Box padding="10px">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<SignUp />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<SignIn />}
                />
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
                <PrivateRoute redirectTo="/login" component={<Home />} />
              }
            />
          </Route>
        </Routes>
      </Box>
    </ChakraProvider>
  );
};
