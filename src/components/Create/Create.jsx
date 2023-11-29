import useTitleChange from '../../hooks/useTitleChange';
import './Create.css';
import FormRecipe from '../FormRecipe/FormRecipe';
import { createReciep } from '../../services/recipeServices';
import { useNavigate } from 'react-router-dom';
import GoToTop from '../../util/GoToTop';
import useFormValidator from '../../hooks/useFormValidator';
import { useContext } from 'react';
import { ServerErrorHandlerContext } from '../../contexts/ServerErrorHandlerContext';

export default function Create() {
  const {
    formValues,
    setFormValues,
    formValidatorErrors,
    formValidator,
    changeFormHandler,
    isDisabled,
  } = useFormValidator();

  useTitleChange('Create');

  const errorsContextValues = useContext(ServerErrorHandlerContext);

  const navigate = useNavigate();

  async function createNewRecipe(e) {
    e.preventDefault();

    try {
      await createReciep(formValues).then((result) => {
        console.log(result);

        errorsContextValues.changeErrors({
          type: 'Success',
          message: `Успешно създаде рецепта "${formValues.recipeName}".`,
        });

        window.scrollTo(0, 0);
      });
    } catch (error) {
      errorsContextValues.changeErrors({
        type: 'Error',
        message: error.message,
      });
    }

    setFormValues({
      recipeName: '',
      imageUrl: '',
      ingredients: '',
      prepTime: '',
      cookTime: '',
      totalTime: '',
      servings: '',
    });
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
            <input type='submit' disabled={isDisabled} value='Създай' />
          </form>
        </div>
      </div>
      <GoToTop />
    </>
  );
}
