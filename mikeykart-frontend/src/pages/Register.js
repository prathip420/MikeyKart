import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const alreadyExists = existingUsers.some((u) => u.email === email);

    if (alreadyExists) {
      alert('User already exists with this email.');
      return;
    }

    const newUser = { username, email, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    alert('Registration successful!');
    navigate('/login');
  };
return (
  <div className="auth-page-bg">
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit" className="register-btn">Register</button>
      </form>
      <p className='do'>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  </div>
);
}

export default Register;
