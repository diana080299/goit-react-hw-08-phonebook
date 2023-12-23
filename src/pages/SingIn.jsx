import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postLogInThunk } from 'service/fetchAuth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChangeIn = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSingIn = e => {
    e.preventDefault();
    const userLogIn = { email, password };
    dispatch(postLogInThunk(userLogIn));
  };

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box maxWidth="320px">
      <form onSubmit={handleSingIn}>
        <label>
          Email
          <Input
            variant="outline"
            placeholder="Entry your email"
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChangeIn}
            marginBottom="15px"
          />
        </label>
        <label>
          Password
          <InputGroup size="md">
            <Input
              placeholder="Entry your password"
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              name="password"
              value={password}
              required
              onChange={handleChangeIn}
              marginBottom="15px"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </label>
        <Button colorScheme="teal" variant="outline" type="submit">
          Sing In
        </Button>
      </form>
    </Box>
  );
};

export default SignIn;
