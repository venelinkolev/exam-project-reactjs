import { useState, useEffect } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import FormRecipe from '../FormRecipe/FormRecipe';

import { getRecipe, editRecipe } from '../../services/recipeServices';
import './Edit.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
  const [formValues, setFormValues] = useState({
    recipeName: '',
    imageUrl: '',
    ingredients: '',
    prepTime: '',
    cookTime: '',
    totalTime: '',
    servings: '',
  });

  const { recipeId } = useParams();
  // console.log(recipeId);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipe(recipeId).then((result) => {
      console.log(result);
      setFormValues(result[0]);
    });
  }, [recipeId]);

  useTitleChange('Edit');

  function changeFormHandler(e) {
    // console.log('Change')
    setFormValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function recipeEdit(e) {
    e.preventDefault();

    editRecipe(recipeId, formValues)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(formValues)
    // console.log(e);

    navigate(`/catalog/${recipeId}/details`);
  }

  return (
    <>
      <div className='edit-container'>
        <div className='edit-recipe'>
          <h1>Редактирай Рецепта</h1>
          <form onSubmit={recipeEdit}>
            <FormRecipe
              formValues={formValues}
              changeFormHandler={changeFormHandler}
            />
            <input type='submit' value='Редактирай' />
          </form>
        </div>
      </div>
    </>
  );
}
