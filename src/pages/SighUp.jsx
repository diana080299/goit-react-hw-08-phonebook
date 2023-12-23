import { Button, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { postUserThunk } from 'service/fetchAuth';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmitUp = e => {
    e.preventDefault();
    const newUser = { name, email, password };
    dispatch(postUserThunk(newUser));
  };

  return (
    <>
      <Heading as="h3" size="md" marginBottom="17px">
        Sign Up
      </Heading>
      <form onSubmit={handleSubmitUp}>
        <label>
          Name
          <Input
            variant="outline"
            placeholder="Entry your name"
            id="name"
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <Input
            variant="outline"
            placeholder="Entry your email"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <Input
            variant="outline"
            placeholder="Entry your password"
            id="password"
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
            marginBottom="15px"
          />
        </label>
        <Button
          colorScheme="teal"
          variant="outline"
          type="submit"
          marginBottom="15px"
        >
          Sign Up
        </Button>
        <div>
          <NavLink to="/login">
            <Heading as="h3" size="md">
              If you already have an account, please{' '}
              <Button colorScheme="teal" size="xs">
                Sign In
              </Button>
            </Heading>
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default SignUp;
