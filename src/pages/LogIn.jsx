import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postLogInThunk } from 'service/fetchAuth';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
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

  const handleLogIn = e => {
    e.preventDefault();
    const logInUser = { email, password };
    dispatch(postLogInThunk(logInUser));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleLogIn}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="passsword"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </label>
        <button type="submit"></button>
      </form>
    </>
  );
};

export default LogIn;
