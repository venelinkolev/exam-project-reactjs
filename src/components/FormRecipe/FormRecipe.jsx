import './FormRecipe.css';

export default function FormRecipe({
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
        />
        <label htmlFor='imageUrl'>Зареди снимка:</label>
        <input
          type='text'
          id='imageUrl'
          name='imageUrl'
          placeholder='http://... или https://...'
          value={formValues.imageUrl}
          onChange={changeFormHandler}
        />

        <label htmlFor='ingredients'>Наичин на приготвяне(продукти):</label>
        <textarea
          type='text'
          id='ingredients'
          name='ingredients'
          placeholder='.....'
          value={formValues.ingredients}
          onChange={changeFormHandler}
        />
        <div className='recipe-more-info'>
          <div className='row-first'>
            <div className='prepTime'>
              <label htmlFor='prepTime'>Време за приготвяне:</label>
              <input
                type='text'
                id='prepTime'
                name='prepTime'
                placeholder='минути'
                value={formValues.prepTime}
                onChange={changeFormHandler}
              />
            </div>
            <div className='cookTime'>
              <label htmlFor='cookTime'>Време за готвене:</label>
              <input
                type='text'
                id='cookTime'
                name='cookTime'
                placeholder='минути'
                value={formValues.cookTime}
                onChange={changeFormHandler}
              />
            </div>
          </div>
          <div className='row-second'>
            <div className='totalTime'>
              <label htmlFor='totalTime'>Общо време:</label>
              <input
                type='text'
                id='totalTime'
                name='totalTime'
                placeholder='минути'
                value={formValues.totalTime}
                onChange={changeFormHandler}
              />
            </div>
            <div className='servings'>
              <label htmlFor='servings'>Порции:</label>
              <input
                type='text'
                id='servings'
                name='servings'
                placeholder='бройка'
                value={formValues.servings}
                onChange={changeFormHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
