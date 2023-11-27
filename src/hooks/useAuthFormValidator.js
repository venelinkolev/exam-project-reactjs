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

  function formValidator(e) {
    let currentFieldName = e.target.name;
    let currentFieldNameErr = currentFieldName + 'Err';

    console.log(currentFieldName);
  }

  switch (currentFieldName) {
    case 'firstName':
      if (formValues[currentFieldName].length == 0) {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: 'Полето е задължително!',
        }));
      } else if (formValues[currentFieldName].length < 3) {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: 'Заглавието трябва да е минимум 3 символа.',
        }));
      } else {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: '',
        }));
      }

      break;

    case 'lastName':
      if (formValues[currentFieldName].length == 0) {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: 'Полето е задължително!',
        }));
      } else if (formValues[currentFieldName].length < 3) {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: 'Заглавието трябва да е минимум 3 символа.',
        }));
      } else {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: '',
        }));
      }

      break;

    case 'email':
      if (formValues[currentFieldName].length == 0) {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: 'Полето е задължително!',
        }));
      } else if (formValues[currentFieldName].length < 3) {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: 'Заглавието трябва да е минимум 3 символа.',
        }));
      } else {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: '',
        }));
      }

      break;

    case 'password':
      if (formValues[currentFieldName].length == 0) {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: 'Полето е задължително!',
        }));
      } else if (formValues[currentFieldName].length < 3) {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: 'Заглавието трябва да е минимум 3 символа.',
        }));
      } else {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: '',
        }));
      }

      break;

    case 'rePassword':
      if (formValues[currentFieldName].length == 0) {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: 'Полето е задължително!',
        }));
      } else if (formValues[currentFieldName].length < 3) {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: 'Заглавието трябва да е минимум 3 символа.',
        }));
      } else {
        setFormValidatorErrors((state) => ({
          ...state,
          [currentFieldNameErr]: '',
        }));
      }

      break;
  }

  return {
    userData,
    setUserData,
    formValidatorErrors,
    formValidator,
    isDisabled,
  };
}
