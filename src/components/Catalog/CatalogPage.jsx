import { useContext, useEffect, useState } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import './CatalogPage.css';
import RecipeCard from './RecipeCard';
import { getAllRecipes } from '../../services/recipeServices';
import { ServerErrorHandlerContext } from '../../contexts/ServerErrorHandlerContext';
import Spinner from '../Spinner/Spinner';

export default function CatalogPage() {
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

  useTitleChange('Catalog');

  return (
    <>
      <div className='main'>
        <h1>КАТАЛОГ</h1>
        <div className='recipe-card container'>
          {recipes.length === 0 && <Spinner />}
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} {...recipe} />
          ))}
        </div>
      </div>
    </>
  );
}
