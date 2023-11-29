import { useContext, useEffect, useState } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import './MyRecipes.css';
import { getOwnerRecipes } from '../../services/recipeServices';
import { UserContext } from '../../contexts/UserContext';
import RecipeCard from '../Catalog/RecipeCard';
import GoToTop from '../../util/GoToTop';
import { ServerErrorHandlerContext } from '../../contexts/ServerErrorHandlerContext';

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([]);

  const userContextValues = useContext(UserContext);
  const errorContextValues = useContext(ServerErrorHandlerContext);

  const ownerId = userContextValues.userInfo.userId;

  useEffect(() => {
    try {
      getOwnerRecipes(ownerId).then((ownerRecipes) => {
        //console.log(ownerRecipes);
        setRecipes(ownerRecipes);
      });
    } catch (error) {
      errorContextValues.changeErrors({
        type: 'Error',
        message: error.message,
      });
    }
  }, []);

  useTitleChange('My Recipes');

  return (
    <>
      <div className='my-recipes-container'>
        <h1>Рецепти на {userContextValues.userInfo.userName}</h1>
        <div className='my-recipe-card container'>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe._id} {...recipe} />
          ))}
        </div>
      </div>
      <GoToTop />
    </>
  );
}
