import { useContext, useEffect, useState } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import './Details.css';
import { getRecipe, removeRecipe } from '../../services/recipeServices';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import GoToTop from '../../util/GoToTop';
import { ServerErrorHandlerContext } from '../../contexts/ServerErrorHandlerContext';

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
    userId: '',
  });

  useTitleChange('Details');

  const navigate = useNavigate();

  const userContextValues = useContext(UserContext);
  const errorContextValues = useContext(ServerErrorHandlerContext);

  const { recipeId } = useParams();

  useEffect(() => {
    try {
      getRecipe(recipeId).then((recipe) => {
        //console.log(recipe);
        setRecipe(recipe[0]);
      });
    } catch (error) {
      errorContextValues.changeErrors({
        type: 'Error',
        message: error.message,
      });
    }
  }, [recipeId]);

  // console.log(userContextValues.userInfo.userId, recipe.userId);
  const isOwnerRecipe = userContextValues.userInfo.userId === recipe.userId;
  // console.log(isOwnerRecipe);

  async function deleteRecipe(recipeId) {
    if (window.confirm('Искате ли да изтриете рецептата?')) {
      try {
        await removeRecipe(recipe._id).then((result) => {
          //console.log(result);
        });

        errorContextValues.changeErrors({
          type: 'Success',
          message: `Успешно изтрихте рецепта "${recipe.recipeName}".`,
        });

        navigate('/my-recipes');
      } catch (error) {
        errorContextValues.changeErrors({
          type: 'Error',
          message: error.message,
        });
      }
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
          <div className='image-table'>
            <div className='recipe-details-image'>
              <img src={recipe.imageUrl} alt={recipe.recipeName} />
            </div>
            <div className='recipe-details-table'>
              <table>
                <thead>
                  <tr>
                    <th>Време за приготвяне</th>
                    <th>Време за готвене</th>
                    <th>Общо време</th>
                    <th>Порции</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{recipe.prepTime}</td>
                    <td>{recipe.cookTime}</td>
                    <td>{recipe.totalTime}</td>
                    <td>{recipe.servings}</td>
                  </tr>
                  <tr>
                    <td>минути</td>
                    <td>минути</td>
                    <td>минути</td>
                    <td>брой</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='recipe-info'>
            <div className='recipe-details-ingredients'>
              <h2>Наичин на приготвяне(продукти)</h2>
              {/* {transform(recipe.ingredients).map((line, index) => (
                <p key={index}>{line}</p> 
              ))} */}
              <p>{recipe.ingredients}</p>
            </div>
            <div className='recipe-details-btn'>
              <Link to={'/catalog'}>Каталог</Link>
              {isOwnerRecipe && (
                <>
                  <Link to={`/catalog/${recipe._id}/edit`}>Редактирай</Link>
                  <Link onClick={deleteRecipe}>Изтрий</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
}
