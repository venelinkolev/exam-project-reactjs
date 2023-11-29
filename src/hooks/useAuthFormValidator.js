import { useState } from 'react';

export default function useAuthFormValidator() {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const [formValidatorErrors, setFormValidatorErrors] = useState({
    firstNameErr: '',
    lastNameErr: '',
    emailErr: '',
    passwordErr: '',
    rePasswordErr: '',
  });

  let isDisabled = true;
  let isLoginDisabled = true;

  function formValidator(e) {
    let currentFieldName = e.target.name;
    let currentFieldNameErr = currentFieldName + 'Err';

    console.log(currentFieldName);

    switch (currentFieldName) {
      case 'firstName':
        if (userData[currentFieldName].length == 0) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето е задължително!',
          }));
        } else if (userData[currentFieldName].length < 2) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Името трябва да е минимум 2 символа.',
          }));
        } else {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: '',
          }));
        }

        break;

      case 'lastName':
        if (userData[currentFieldName].length == 0) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето е задължително!',
          }));
        } else if (userData[currentFieldName].length < 3) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Фамилията трябва да е минимум 3 символа.',
          }));
        } else {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: '',
          }));
        }

        break;

      case 'email':
        if (userData[currentFieldName].length == 0) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето е задължително!',
          }));
        } else if (
          !userData[currentFieldName].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
        ) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'E-mail-а не е валиден.',
          }));
        } else {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: '',
          }));
        }

        break;

      case 'password':
        if (userData[currentFieldName].length == 0) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето е задължително!',
          }));
        } else if (userData[currentFieldName].length < 5) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Паролата трябва да е поне 5 символа.',
          }));
        } else {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: '',
          }));
        }

        break;

      case 'rePassword':
        // console.log(userData.password, '', userData.rePassword);
        if (userData[currentFieldName].length == 0) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето е задължително!',
          }));
        } else if (userData[currentFieldName] != userData.password) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Паролите не са еднакви.',
          }));
        } else {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: '',
          }));
        }

        break;
    }
  }

  if (
    userData.firstName !== '' &&
    userData.lastName !== '' &&
    userData.email !== '' &&
    userData.password !== '' &&
    userData.rePassword !== '' &&
    formValidatorErrors.firstNameErr == '' &&
    formValidatorErrors.lastNameErr == '' &&
    formValidatorErrors.emailErr == '' &&
    formValidatorErrors.passwordErr == '' &&
    formValidatorErrors.rePasswordErr == ''
  ) {
    isDisabled = false;
  }

  if (
    userData.email !== '' &&
    userData.password !== '' &&
    formValidatorErrors.emailErr == '' &&
    formValidatorErrors.passwordErr == ''
  ) {
    isLoginDisabled = false;
  }

  return {
    userData,
    setUserData,
    formValidatorErrors,
    formValidator,
    isDisabled,
    isLoginDisabled,
  };
}
