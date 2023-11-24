import { useContext, useState } from 'react';
import './Register.css';
import { UserContext } from '../../contexts/UserContext';
import useTitleChange from '../../hooks/useTitleChange';
import { register } from '../../services/userServices';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
  });

  useTitleChange('Register');

  const navigate = useNavigate();

  const userContextValues = useContext(UserContext);

  function registerChangeHandler(e) {
    setUserData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  async function registerUser(e) {
    e.preventDefault();

    const registerData = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      password: userData.password,
    };

    // console.log(registerData);

    await register(registerData)
      .then((result) => {
        console.log(result);

        const userDataToken = {
          userName: `${result.firstName} ${result.lastName}`,
          isUser: true,
          userId: result._id,
        };

        localStorage.setItem('authToken', JSON.stringify(userDataToken));

        userContextValues.userData(userDataToken);
      })
      .catch((err) => console.log(err));

    navigate('/my-recipes');
  }

  function passwordCheck(password, rePassword) {
    return password !== rePassword ? false : true;
  }

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
          <p>
            Имате вече регистрация? <Link to={'/login'}>Вход</Link>
          </p>
        </div>
      </div>
    </>
  );
}
