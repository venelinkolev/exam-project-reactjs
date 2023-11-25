import { useState } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import './Create.css';
import FormRecipe from '../FormRecipe/FormRecipe';
import { createReciep } from '../../services/recipeServices';
import { useNavigate } from 'react-router-dom';
import GoToTop from '../../util/GoToTop';

export default function Create() {
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

  useTitleChange('Create');

  const navigate = useNavigate();

  function changeFormHandler(e) {
    // console.log('Change')
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function createNewRecipe(e) {
    e.preventDefault();

    createReciep(formValues)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    setFormValues({
      recipeName: '',
      imageUrl: '',
      ingredients: '',
      prepTime: '',
      cookTime: '',
      totalTime: '',
      servings: '',
    });
    // navigate('/my-recipes');
    // console.log(formValues)
    // console.log(e);
  }

  function formValidator(e) {
    console.log(e.target.name);
    // if (
    //   formValues.recipeName === '' ||
    //   formValues.imageUrl === '' ||
    //   formValues.ingredients === '' ||
    //   formValues.prepTime === '' ||
    //   formValues.cookTime === '' ||
    //   formValues.totalTime === '' ||
    //   formValues.servings === ''
    // )
    //   return setFormValidatorErrors((state) => ({
    //     ...state,
    //   }));
    // 'Полето е задължително!';
    emptyField(e.target.name);

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
  return (
    <>
      <div className='create-container'>
        <div className='create-recipe'>
          <h1>Създай Рецепта</h1>
          <form onSubmit={createNewRecipe}>
            <FormRecipe
              formValidatorErrors={formValidatorErrors}
              formValidator={formValidator}
              formValues={formValues}
              changeFormHandler={changeFormHandler}
            />
            <input type='submit' value='Създай' />
          </form>
        </div>
      </div>
      <GoToTop />
    </>
  );
}
