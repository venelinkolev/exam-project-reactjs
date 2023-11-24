import { useEffect, useState } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import './Details.css';
import { getRecipe } from '../../services/recipeServices';
import { useParams } from 'react-router-dom';

export default function Details() {
  const [recipe, setRecipe] = useState({
    recipeName: '',
    imageUrl: '',
    ingredients: '',
    prepTime: '',
    cookTime: '',
    totalTime: '',
    servings: '',
  });

  useTitleChange('Details');

  const { recipeId } = useParams();

  useEffect(() => {
    getRecipe(recipeId)
      .then((recipe) => {
        console.log(recipe);
        setRecipe(recipe[0]);
      })
      .catch((err) => console.log(err));
  }, [recipeId]);
  return (
    <>
      <div className='details-container'>
        <h1>{recipe.recipeName}</h1>
        <div className='recipe-details'>
          <div className='recipe-details-image'></div>
          <div className='recipe-details-tabel'></div>
          <div className='recipe-details-ingredients'></div>
          <div className='recipe-details-btn'></div>
        </div>
      </div>
    </>
  );
}
