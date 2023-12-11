import { useContext, useEffect } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import FormRecipe from '../FormRecipe/FormRecipe';

import { getRecipe, editRecipe } from '../../services/recipeServices';
import './Edit.css';
import { useNavigate, useParams } from 'react-router-dom';
import GoToTop from '../../util/GoToTop';
import useFormValidator from '../../hooks/useFormValidator';
import { ServerErrorHandlerContext } from '../../contexts/ServerErrorHandlerContext';
import Spinner from '../Spinner/Spinner';

export default function Edit() {
  const {
    formValues,
    setFormValues,
    formValidatorErrors,
    formValidator,
    changeFormHandler,
    isDisabled,
  } = useFormValidator();

  const errorContextValues = useContext(ServerErrorHandlerContext);

  const { recipeId } = useParams();
  // console.log(recipeId);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      getRecipe(recipeId).then((result) => {
        // console.log(result);
        setFormValues(result[0]);
      });
    } catch (error) {
      errorContextValues.changeErrors({
        type: 'Error',
        message: error.message,
      });
    }
  }, [recipeId]);

  useTitleChange('Edit');

  async function recipeEdit(e) {
    e.preventDefault();

    try {
      await editRecipe(recipeId, formValues).then((result) => {
        console.log(result);

        // console.log(formValues)
        // console.log(e);
      });

      errorContextValues.changeErrors({
        type: 'Success',
        message: `Успешно редактирахте рецепта "${formValues.recipeName}".`,
      });

      navigate(`/catalog/${recipeId}/details`);
    } catch (error) {
      errorContextValues.changeErrors({
        type: 'Error',
        message: error.message,
      });
    }
  }

  return (
    <>
      <div className='edit-container'>
        {formValues._id === '' && <Spinner />}
        {formValues._id !== '' && (
          <>
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
          </>
        )}
      </div>
      <GoToTop />
    </>
  );
}
