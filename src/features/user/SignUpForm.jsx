import { useState } from 'react';

const SignUpForm = ({ handleSubmit }) => {
  const [data, setData] = useState({
    firstName: 'Al',
    email: 'alexandr.s.shevchenko@gmail.com',
    password: '123456',
  });
  const { firstName, email, password } = data;

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(event, data);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            id="firstName"
            onChange={handleChange('firstName')}
            value={firstName}
          />
        </div>
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
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

SignUpForm.displayName = 'Sign Up Form';

export default SignUpForm;
