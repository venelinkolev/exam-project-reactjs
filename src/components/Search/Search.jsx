import { useContext, useEffect, useState } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import GoToTop from '../../util/GoToTop';
import './Search.css';
import { ServerErrorHandlerContext } from '../../contexts/ServerErrorHandlerContext';
import { getAllRecipes } from '../../services/recipeServices';
import RecipeCard from '../Catalog/RecipeCard';

export default function Search() {
  const [recipes, setRecipes] = useState([]);

  const errorContextValues = useContext(ServerErrorHandlerContext);

  useEffect(() => {
    try {
      getAllRecipes().then((result) => {
        // console.log(result);
        setRecipes(result);
      });
    } catch (error) {
      errorContextValues.changeErrors({
        type: 'Error',
        message: error.message,
      });
    }
  }, []);

  useTitleChange('Search');
  return (
    <>
      <div className='search'>
        <h1>Търси рецепта</h1>
        <div className='search-field container'>
          <form action='GET'>
            <label htmlFor='search'>Търси</label>
            <input type='text' id='search' placeholder='Име на рецептата ...' />
          </form>
        </div>
        <div className='search-recipe-card container'>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} {...recipe} />
          ))}
        </div>
      </div>
      <GoToTop />
    </>
  );
}
