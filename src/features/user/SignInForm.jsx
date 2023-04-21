import { useState } from 'react';

const SignInForm = ({ handleSubmit }) => {
  const [data, setData] = useState({
    email: 'alexandr.s.shevchenko@gmail.com',
    password: '123456',
  });
  const { email, password } = data;

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    handleSubmit(event, data);
  };

  return (
    <>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={handleChange('email')}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange('password')}
            value={password}
          />
        </div>
        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

SignInForm.displayName = 'Sign In Form';

export default SignInForm;
