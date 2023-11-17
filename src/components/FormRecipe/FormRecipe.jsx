import './FormRecipe.css';

export default function FormRecipe() {
  return (
    <>
      <div className='form-container'>
        <label htmlFor='recipeName'>Заглавие:</label>
        <input
          type='text'
          id='recipeName'
          name='recipeName'
          placeholder='Наименование на рецептата'
        />
        <label htmlFor='imageUrl'>Зареди снимка:</label>
        <input
          type='text'
          id='imageUrl'
          name='imageUrl'
          placeholder='http://... или https://...'
        />

        <label htmlFor='ingredients'>Наичин на приготвяне(продукти):</label>
        <textarea
          type='text'
          id='ingredients'
          name='ingredients'
          placeholder='.....'
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
              />
            </div>
            <div className='cookTime'>
              <label htmlFor='cookTime'>Време за готвене:</label>
              <input
                type='text'
                id='cookTime'
                name='cookTime'
                placeholder='минути'
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
              />
            </div>
            <div className='servings'>
              <label htmlFor='servings'>Порции:</label>
              <input
                type='text'
                id='servings'
                name='servings'
                placeholder='бройка'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
