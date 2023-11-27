import { useState } from 'react';

export default function useFormValidator() {
  const [formValues, setFormValues] = useState({
    recipeName: '',
    imageUrl: '',
    ingredients: '',
    prepTime: '',
    cookTime: '',
    totalTime: '',
    servings: '',
  });

  const [formValidatorErrors, setFormValidatorErrors] = useState({
    recipeNameErr: '',
    imageUrlErr: '',
    ingredientsErr: '',
    prepTimeErr: '',
    cookTimeErr: '',
    totalTimeErr: '',
    servingsErr: '',
  });

  let isDisabled = true;

  function formValidator(e) {
    let currentFieldName = e.target.name;
    let currentFieldNameErr = currentFieldName + 'Err';

    console.log(currentFieldName);

    switch (currentFieldName) {
      case 'recipeName':
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

      case 'imageUrl':
        if (formValues[currentFieldName].length == 0) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето е задължително!',
          }));
        } else if (
          !formValues[currentFieldName].startsWith('http://') &&
          !formValues[currentFieldName].startsWith('https://') &&
          !formValues[currentFieldName].startsWith('data:image/')
        ) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: `Url трябва да започва с 'data:image/', 'http://' или 'https://'`,
          }));
        } else {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: '',
          }));
        }
        break;

      case 'ingredients':
        if (formValues[currentFieldName].length == 0) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето е задължително!',
          }));
        } else if (formValues[currentFieldName].length < 15) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето трябва да е минимум 15 символа.',
          }));
        } else {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: '',
          }));
        }
        break;

      case 'prepTime':
        if (formValues[currentFieldName].length == 0) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето е задължително!',
          }));
        } else if (Number(formValues[currentFieldName]) < 1) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Времето не може да е 0 минути.',
          }));
        } else {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: '',
          }));
        }
        break;

      case 'cookTime':
        if (formValues[currentFieldName].length == 0) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето е задължително!',
          }));
        } else if (Number(formValues[currentFieldName]) < 1) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Времето не може да е 0 минути.',
          }));
        } else {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: '',
          }));
        }
        break;

      case 'totalTime':
        if (formValues[currentFieldName].length == 0) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето е задължително!',
          }));
        } else if (Number(formValues[currentFieldName]) < 1) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Времето не може да е 0 минути.',
          }));
        } else {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: '',
          }));
        }
        break;

      case 'servings':
        if (formValues[currentFieldName].length == 0) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Полето е задължително!',
          }));
        } else if (Number(formValues[currentFieldName]) < 1) {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: 'Порцията трябва да е поне една.',
          }));
        } else {
          setFormValidatorErrors((state) => ({
            ...state,
            [currentFieldNameErr]: '',
          }));
        }
        break;
    }

    function emptyField(fieldName) {
      let field = fieldName + 'Err';
      // console.log(field);

      if (formValues[fieldName] === '') {
        setFormValidatorErrors((state) => ({
          ...state,
          [field]: 'Полето е задължително!',
        }));
      } else {
        setFormValidatorErrors((state) => ({
          ...state,
          [field]: '',
        }));
      }
    }
  }

  if (
    formValidatorErrors.recipeNameErr == '' &&
    formValidatorErrors.imageUrlErr == '' &&
    formValidatorErrors.ingredientsErr == '' &&
    formValidatorErrors.prepTimeErr == '' &&
    formValidatorErrors.cookTimeErr == '' &&
    formValidatorErrors.totalTimeErr == '' &&
    formValidatorErrors.servingsErr == '' &&
    formValues.recipeName !== '' &&
    formValues.imageUrl !== '' &&
    formValues.ingredients !== '' &&
    formValues.prepTime !== '' &&
    formValues.cookTime !== '' &&
    formValues.totalTime !== '' &&
    formValues.servings !== ''
  ) {
    isDisabled = false;
  }

  return {
    formValues,
    setFormValues,
    formValidator,
    formValidatorErrors,
    isDisabled,
  };
}
