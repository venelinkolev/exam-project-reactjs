import { useState } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import './Create.css';
import FormRecipe from '../FormRecipe/FormRecipe';
import { createReciep } from '../../services/recipeServices';

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

  useTitleChange('Create');

  function changeFormHandler(e) {
    // console.log('Change')
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function createRecipe(e) {
    e.preventDefault();

    createReciep(formValues)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(formValues)
    // console.log(e);
  }
  return (
    <>
      <div className='create-container'>
        <div className='create-recipe'>
          <h1>Създай Рецепта</h1>
          <form onSubmit={createRecipe}>
            <FormRecipe
              formValues={formValues}
              changeFormHandler={changeFormHandler}
            />
            <input type='submit' value='Създай' />
          </form>
        </div>
      </div>
    </>
  );
}
