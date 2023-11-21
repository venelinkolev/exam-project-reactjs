import { useState } from 'react';
import './Register.css';

export default function Register() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
  });

  function registerChangeHandler() {}

  async function registerUser() {}

  return (
    <>
      <div className='register-container'>
        <div className='register-user'>
          <h1>Вход потребител</h1>
          <form onSubmit={registerUser}>
            <div className='register-form-container'>
              <label htmlFor='email'>E-mail:</label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='example@gmail.com'
                value={userData.email}
                onChange={registerChangeHandler}
              />
              <label htmlFor='password'>Парола:</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='****'
                value={userData.password}
                onChange={registerChangeHandler}
              />
            </div>
            <input type='submit' value='Вход' />
          </form>
        </div>
      </div>
    </>
  );
}
