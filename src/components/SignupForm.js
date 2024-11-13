// SignupForm.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';

const SignupForm = ({ setCurrentPage }) => {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const success = await signup(email, password);

    if (success) setCurrentPage('login');
    else setError('User already exists.');
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      {error && <p className="error">{error}</p>}
      <br></br>
      <button onClick={() => setCurrentPage('login')}>Login</button>
    </div>
  );
};

export default SignupForm;
