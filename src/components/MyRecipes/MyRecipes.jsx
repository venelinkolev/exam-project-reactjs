import { useContext, useEffect, useState } from 'react';
import useTitleChange from '../../hooks/useTitleChange';
import './MyRecipes.css';
import { getOwnerRecipes } from '../../services/recipeServices';
import { UserContext } from '../../contexts/UserContext';
import RecipeCard from '../Catalog/RecipeCard';
import GoToTop from '../../util/GoToTop';

export default function MyRecipes() {
  const [recipes, setRecipes] = useState([]);

  const userContextValues = useContext(UserContext);

  const ownerId = userContextValues.userInfo.userId;

  useEffect(() => {
    getOwnerRecipes(ownerId).then((ownerRecipes) => {
      //console.log(ownerRecipes);
      setRecipes(ownerRecipes);
    });
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
