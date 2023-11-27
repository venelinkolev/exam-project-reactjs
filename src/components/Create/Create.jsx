import useTitleChange from '../../hooks/useTitleChange';
import './Create.css';
import FormRecipe from '../FormRecipe/FormRecipe';
import { createReciep } from '../../services/recipeServices';
import { useNavigate } from 'react-router-dom';
import GoToTop from '../../util/GoToTop';
import useFormValidator from '../../hooks/useFormValidator';

export default function Create() {
  const {
    formValues,
    setFormValues,
    formValidatorErrors,
    formValidator,
    isDisabled,
  } = useFormValidator();

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
