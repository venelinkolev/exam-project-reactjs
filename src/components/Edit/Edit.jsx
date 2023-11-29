import { useEffect } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import FormRecipe from '../FormRecipe/FormRecipe';

import { getRecipe, editRecipe } from '../../services/recipeServices';
import './Edit.css';
import { useNavigate, useParams } from 'react-router-dom';
import GoToTop from '../../util/GoToTop';
import useFormValidator from '../../hooks/useFormValidator';

export default function Edit() {
  const {
    formValues,
    setFormValues,
    formValidatorErrors,
    formValidator,
    changeFormHandler,
    isDisabled,
  } = useFormValidator();

  const { recipeId } = useParams();
  // console.log(recipeId);
  const navigate = useNavigate();

  useEffect(() => {
    getRecipe(recipeId).then((result) => {
      // console.log(result);
      setFormValues(result[0]);
    });
  }, [recipeId]);

  useTitleChange('Edit');

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
              formValidatorErrors={formValidatorErrors}
              formValidator={formValidator}
              formValues={formValues}
              changeFormHandler={changeFormHandler}
            />
            <input type='submit' disabled={isDisabled} value='Редактирай' />
          </form>
        </div>
      </div>
      <GoToTop />;
    </>
  );
}
