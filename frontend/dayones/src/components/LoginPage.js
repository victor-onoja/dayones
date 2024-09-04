import React from "react";
import "./LoginPage.css";
import logo from "./logo.png";
import boy from "./boy.png";
import ethereumicon from "./ethereum-icon.png";
import mailicon from "./mail-icon.png";
import lockicon from "./lock-icon.png";

const LoginPage = () => {
  return (
    <div className='login-page'>
      <nav className='login-navbar'>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt='Dayones Logo' />
            <span className='logo-text'>dayones</span>
          </div>
          <span className='login-text'>Login</span>
        </div>
      </nav>

      <main className='login-main' style={{ height: 'calc(100vh - 66px)' }}>
        <div className='container login-content'>
          <div className='login-image'>
            <img src={boy} alt='Smiling youth' />
          </div>
          <div className='login-form  flex flex-col'>
            <div className="flex-grow">
              <h1 className='text-green-800 text-3xl font-extrabold mb-12'>
                Welcome back!
              </h1>
              <button className='btn-ethereum'>
                <img src={ethereumicon} alt='Ethereum Icon' />
                Sign in with Ethereum
              </button>

              <div className='login-divider'>
                <span>or</span>
              </div>

              <form>
                <div className='form-group'>
                  <label htmlFor='email'>Email address *</label>
                  <div className='input-wrapper'>
                    <img
                      src={mailicon}
                      alt='Email Icon'
                      className='input-icon'
                    />
                    <input
                      type='email'
                      id='email'
                      placeholder='example@gmail.com'
                      required
                    />
                  </div>
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>Password </label>
                  <div className='input-wrapper'>
                    <img
                      src={lockicon}
                      alt='Password Icon'
                      className='input-icon'
                    />
                    <input
                      type='password'
                      id='password'
                      placeholder='Enter your password'
                      required
                    />
                  </div>
                </div>

                <button type='submit' className='btn-login'>
                  Login with password
                </button>
              </form>
            </div>
            <footer className='text-center py-4 mt-14 text-gree-800'>
              <p>© Dayones Technologies. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
