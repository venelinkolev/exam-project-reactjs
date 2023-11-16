import { useEffect, useState } from 'react';
import useTitleChange from '../../util/useTitleChange';
import './CatalogPage.css';
import RecipeCard from './RecipeCard';
import { getAllRecipes } from '../../services/recipeServices';

export default function CatalogPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
      .then((result) => {
        // console.log(result);
        setRecipes(result);
      })
      .catch((err) => console.log(err));
  }, []);

  useTitleChange('Catalog');
  return (
    <>
      <div className='main'>
        <h1>КАТАЛОГ</h1>
        <div className='recipe-card container'>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} {...recipe} />
          ))}
        </div>
      </div>
    </>
  );
}
