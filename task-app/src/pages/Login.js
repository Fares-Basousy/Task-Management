import React, { useState } from 'react';
import Header from "../components/Header"

const LogInForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { userName, password });
    // Reset the form fields
    setUserName(userName);
    setPassword(password);
    e.preventDefault();
    return {username:userName,password:password}  
};

  return (
    <div ><Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"/>
    <form onSubmit={handleSubmit}>
      <img src="./Procrew.png" alt="ProCrew" />
      <h1>Task Management App</h1>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
    </div>
  );
};

export default LogInForm;
