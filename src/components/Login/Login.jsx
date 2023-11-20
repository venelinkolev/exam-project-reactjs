import { useEffect, useState } from 'react';
import './Login.css';
import { login } from '../../services/userServices';
import { useCookies } from 'react-cookie';

export default function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  async function loginUser(e) {
    e.preventDefault();
    // console.log(userData);
    await login(userData)
      .then((result) => console.log(result))
      .catch((err) => console.log(err.message));
  }

  function loginChangeHandler(e) {
    setUserData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <div className='login-container'>
        <div className='login-user'>
          <h1>Вход потребител</h1>
          <form onSubmit={loginUser}>
            <div className='login-form-container'>
              <label htmlFor='email'>E-mail:</label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='example@gmail.com'
                value={userData.email}
                onChange={loginChangeHandler}
              />
              <label htmlFor='password'>Парола:</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='****'
                value={userData.password}
                onChange={loginChangeHandler}
              />
            </div>
            <input type='submit' value='Вход' />
          </form>
        </div>
      </div>
    </>
  );
}
