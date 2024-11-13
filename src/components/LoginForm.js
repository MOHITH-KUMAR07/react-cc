// LoginForm.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';

const LoginForm = ({ setCurrentPage }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, password);

    if (success) setCurrentPage('dashboard');
    else setError('Invalid credentials.');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <br></br>
      <button onClick={() => setCurrentPage('signup')}>Signup</button>
    </div>
  );
};

export default LoginForm;
