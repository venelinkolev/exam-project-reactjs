import './FormRecipe.css';

export default function FormRecipe({
  formValidatorErrors,
  formValidator,
  formValues,
  changeFormHandler,
}) {
  return (
    <>
      <div className='form-container'>
        <label htmlFor='recipeName'>Заглавие:</label>
        <input
          type='text'
          id='recipeName'
          name='recipeName'
          placeholder='Наименование на рецептата'
          value={formValues.recipeName}
          onChange={changeFormHandler}
          onBlur={formValidator}
        />
        {formValidatorErrors.recipeNameErr && (
          <p className='validatorError'>{formValidatorErrors.recipeNameErr}</p>
        )}
        <label htmlFor='imageUrl'>Зареди снимка:</label>
        <input
          type='text'
          id='imageUrl'
          name='imageUrl'
          placeholder='http://... или https://...'
          value={formValues.imageUrl}
          onChange={changeFormHandler}
          onBlur={formValidator}
        />
        {formValidatorErrors.imageUrlErr && (
          <p className='validatorError'>{formValidatorErrors.imageUrlErr}</p>
        )}
        <label htmlFor='ingredients'>Наичин на приготвяне(продукти):</label>
        <textarea
          type='text'
          id='ingredients'
          name='ingredients'
          placeholder='.....'
          value={formValues.ingredients}
          onChange={changeFormHandler}
          onBlur={formValidator}
        />
        {formValidatorErrors.ingredientsErr && (
          <p className='validatorError'>{formValidatorErrors.ingredientsErr}</p>
        )}
        <div className='recipe-more-info'>
          <div className='row-first'>
            <div className='prepTime'>
              <label htmlFor='prepTime'>Време за приготвяне:</label>
              <input
                type='number'
                id='prepTime'
                name='prepTime'
                placeholder='минути'
                value={formValues.prepTime}
                onChange={changeFormHandler}
                onBlur={formValidator}
              />
              {formValidatorErrors.prepTimeErr && (
                <p className='validatorError'>
                  {formValidatorErrors.prepTimeErr}
                </p>
              )}
            </div>
            <div className='cookTime'>
              <label htmlFor='cookTime'>Време за готвене:</label>
              <input
                type='number'
                id='cookTime'
                name='cookTime'
                placeholder='минути'
                value={formValues.cookTime}
                onChange={changeFormHandler}
                onBlur={formValidator}
              />
              {formValidatorErrors.cookTimeErr && (
                <p className='validatorError'>
                  {formValidatorErrors.cookTimeErr}
                </p>
              )}
            </div>
          </div>
          <div className='row-second'>
            <div className='totalTime'>
              <label htmlFor='totalTime'>Общо време:</label>
              <input
                type='number'
                id='totalTime'
                name='totalTime'
                placeholder='минути'
                value={formValues.totalTime}
                onChange={changeFormHandler}
                onBlur={formValidator}
              />
              {formValidatorErrors.totalTimeErr && (
                <p className='validatorError'>
                  {formValidatorErrors.totalTimeErr}
                </p>
              )}
            </div>
            <div className='servings'>
              <label htmlFor='servings'>Порции:</label>
              <input
                type='number'
                id='servings'
                name='servings'
                placeholder='бройка'
                value={formValues.servings}
                onChange={changeFormHandler}
                onBlur={formValidator}
              />
              {formValidatorErrors.servingsErr && (
                <p className='validatorError'>
                  {formValidatorErrors.servingsErr}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
