import { useEffect, useState } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import './Details.css';
import { getRecipe, removeRecipe } from '../../services/recipeServices';
import { Link, useParams } from 'react-router-dom';

export default function Details() {
  const [recipe, setRecipe] = useState({
    _id: '',
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

  async function deleteRecipe(recipeId) {
    if (window.confirm('Искате ли да изтриете рецептата?')) {
      await removeRecipe(recipe._id)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    } else {
      return;
    }
  }

  function transform(string) {
    return string.split('\n');
  }

  return (
    <>
      <div className='details-container'>
        <h1>{recipe.recipeName}</h1>
        <div className='recipe-details container'>
          <div className='recipe-details-image'>
            <img src={recipe.imageUrl} alt={recipe.recipeName} />
          </div>
          <div className='recipe-info'>
            <div className='recipe-details-ingredients'>
              <h2>Наичин на приготвяне(продукти)</h2>
              {/* {transform(recipe.ingredients).map((line, index) => (
                <p key={index}>{line}</p>
              ))} */}
              <p>{recipe.ingredients}</p>
            </div>
            <div className='recipe-details-tabel'>
              <table>
                <thead>
                  <th>Време за приготвяне</th>
                  <th>Време за готвене</th>
                  <th>Общо време</th>
                  <th>Порции</th>
                </thead>
                <tbody>
                  <tr></tr>
                </tbody>
              </table>
            </div>
            <div className='recipe-details-btn'>
              <Link to={'/catalog'}>Каталог</Link>
              <Link to={`/catalog/${recipe._id}/edit`}>Редактирай</Link>
              <Link onClick={deleteRecipe}>Изтрий</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
