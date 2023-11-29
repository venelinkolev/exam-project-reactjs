import { useContext, useEffect, useState } from 'react';
import './Login.css';
import { login } from '../../services/userServices';
import { UserContext } from '../../contexts/UserContext';
import useTitleChange from '../../hooks/useTitleChange';
import { Link, useNavigate } from 'react-router-dom';
import GoToTop from '../../util/GoToTop';
import useAuthFormValidator from '../../hooks/useAuthFormValidator';

export default function Login() {
  // const [userData, setUserData] = useState({
  //   email: '',
  //   password: '',
  // });

  const {
    userData,
    setUserData,
    formValidatorErrors,
    formValidator,
    isLoginDisabled,
  } = useAuthFormValidator();

  useTitleChange('Login');

  const navigate = useNavigate();

  const userContextValues = useContext(UserContext);

  async function loginUser(e) {
    e.preventDefault();
    // console.log(userData);
    await login(userData)
      .then((result) => {
        if (result.message) {
          throw new Error(result.message);
        }

        const userDataToken = {
          userName: `${result.firstName} ${result.lastName}`,
          isUser: true,
          userId: result._id,
        };

        // console.log();

        localStorage.setItem('authToken', JSON.stringify(userDataToken));

        userContextValues.userData(userDataToken);
      })
      .catch((err) => console.log(err.message));

    navigate('/my-recipes');
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
                onBlur={formValidator}
              />
              {formValidatorErrors.emailErr && (
                <p className='validatorError'>{formValidatorErrors.emailErr}</p>
              )}
              <label htmlFor='password'>Парола:</label>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='****'
                value={userData.password}
                onChange={loginChangeHandler}
                onBlur={formValidator}
              />
              {formValidatorErrors.passwordErr && (
                <p className='validatorError'>
                  {formValidatorErrors.passwordErr}
                </p>
              )}
            </div>
            <input type='submit' disabled={isLoginDisabled} value='Вход' />
          </form>
          <p>
            Нямате още регистрация? <Link to={'/register'}>Регистрация</Link>
          </p>
        </div>
      </div>
      <GoToTop />
    </>
  );
}
