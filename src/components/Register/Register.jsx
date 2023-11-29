import { useContext, useState } from 'react';
import './Register.css';
import { UserContext } from '../../contexts/UserContext';
import useTitleChange from '../../hooks/useTitleChange';
import { register } from '../../services/userServices';
import { Link, useNavigate } from 'react-router-dom';
import GoToTop from '../../util/GoToTop';
import useAuthFormValidator from '../../hooks/useAuthFormValidator';

export default function Register() {
  const {
    userData,
    setUserData,
    formValidatorErrors,
    formValidator,
    fieldChangeHandler,
    isDisabled,
  } = useAuthFormValidator();

  useTitleChange('Register');

  const navigate = useNavigate();

  const userContextValues = useContext(UserContext);

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
                    onChange={fieldChangeHandler}
                    onBlur={formValidator}
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
                    onChange={fieldChangeHandler}
                    onBlur={formValidator}
                  />
                </div>
              </div>
              {(formValidatorErrors.firstNameErr ||
                formValidatorErrors.lastNameErr) && (
                <p className='validatorError'>
                  {formValidatorErrors.firstNameErr +
                    ' ' +
                    formValidatorErrors.lastNameErr}
                </p>
              )}
              <label htmlFor='email'>E-mail:</label>
              <input
                type='text'
                id='email'
                name='email'
                placeholder='example@gmail.com'
                value={userData.email}
                onChange={fieldChangeHandler}
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
                onChange={fieldChangeHandler}
                onBlur={formValidator}
              />
              {formValidatorErrors.passwordErr && (
                <p className='validatorError'>
                  {formValidatorErrors.passwordErr}
                </p>
              )}
              <label htmlFor='rePassword'>Повтори паролата:</label>
              <input
                type='password'
                id='rePassword'
                name='rePassword'
                placeholder='****'
                value={userData.rePassword}
                onChange={fieldChangeHandler}
                onBlur={formValidator}
              />
              {formValidatorErrors.rePasswordErr && (
                <p className='validatorError'>
                  {formValidatorErrors.rePasswordErr}
                </p>
              )}
            </div>
            <input type='submit' disabled={isDisabled} value='Регистрирай' />
          </form>
          <p>
            Имате вече регистрация? <Link to={'/login'}>Вход</Link>
          </p>
        </div>
      </div>
      <GoToTop />
    </>
  );
}
