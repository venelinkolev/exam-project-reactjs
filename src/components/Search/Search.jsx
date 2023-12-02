import { useContext, useEffect, useState } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import GoToTop from '../../util/GoToTop';
import './Search.css';
import { ServerErrorHandlerContext } from '../../contexts/ServerErrorHandlerContext';
import { search } from '../../services/recipeServices';
import RecipeCard from '../Catalog/RecipeCard';

export default function Search() {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState({
    char: '',
  });

  const errorContextValues = useContext(ServerErrorHandlerContext);

  async function searchRecipe(e) {
    e.preventDefault();

    try {
      await search(searchValue.char).then((result) => {
        // console.log(result);
        setRecipes(result);
      });
    } catch (error) {
      errorContextValues.changeErrors({
        type: 'Error',
        message: error.message,
      });
    }
  }

  function fieldChangeHandler(e) {
    // e.preventDefault();

    // console.log(e.target.value);
    setSearchValue((state) => ({
      ...state,
      char: e.target.value,
    }));
  }

  useTitleChange('Search');

  return (
    <>
      <div className='search'>
        <h1>Търси рецепта</h1>
        <div className='search-field'>
          <form onSubmit={searchRecipe}>
            <label htmlFor='search'></label>
            <input
              type='text'
              id='search'
              placeholder='Име на рецепта ...'
              onChange={fieldChangeHandler}
            />
            <input id='searchBtn' type='submit' value='Търси' />
          </form>
        </div>
        <div className='search-recipe-card container'>
          {recipes.length === 0 && (
            <div className='no-recipes'>
              <p>Няма намерени рецепти</p>
              <img
                src='https://rare-gallery.com/uploads/posts/504250-Cake-Pastry.jpg'
                alt='Image'
              />
            </div>
          )}
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} {...recipe} />
          ))}
        </div>
      </div>
      <GoToTop />
    </>
  );
}
