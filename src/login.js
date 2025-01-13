import React, { useState } from 'react';
import './login.css'; // Assuming you have the updated CSS file

const Login = () => {
  // States for email, password, and remember me checkbox
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="my-form-container">
      <section>
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="forget">
              <label>
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember me
              </label>
              <label>
                <a href="#">Forgot password?</a>
              </label>
            </div>
            <button type="submit">Log in</button>
            <div className="register">
              <p>Don't have an account? <a href="#">Register</a></p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
