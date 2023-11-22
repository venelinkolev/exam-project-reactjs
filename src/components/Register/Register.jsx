import { useContext, useState } from 'react';
import './Register.css';
import { UserContext } from '../../contexts/UserContext';
import useTitleChange from '../../hooks/useTitleChange';

export default function Register() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
  });

  useTitleChange('Register');

  const userContextValues = useContext(UserContext);

  function registerChangeHandler() {}

  async function registerUser() {}

  return (
    <>
      <div className='register-container'>
        <div className='register-user'>
          <h1>Регистрация потребител</h1>
          <form onSubmit={registerUser}>
            <div className='register-form-container'>
              <div className='first-last-name'>
                <div className='first-name'>
                  <label htmlFor='firstName'>Име:</label>
                  <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='Иван'
                    value={userData.firstName}
                    onChange={registerChangeHandler}
                  />
                </div>
                <div className='last-name'>
                  <label htmlFor='lastName'>Фамилия:</label>
                  <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    placeholder='Иванов'
                    value={userData.lastName}
                    onChange={registerChangeHandler}
                  />
                </div>
              </div>
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
              <label htmlFor='rePassword'>Повтори паролата:</label>
              <input
                type='password'
                id='rePassword'
                name='rePassword'
                placeholder='****'
                value={userData.rePassword}
                onChange={registerChangeHandler}
              />
            </div>
            <input type='submit' value='Регистрирай' />
          </form>
        </div>
      </div>
    </>
  );
}
