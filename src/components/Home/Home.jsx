import { useState, useEffect } from 'react';
import CatalogHomePage from './CatalogHomePage';
import DayRecipeCard from './DayRecipeCard';
import './Home.css';
import { getAllRecipes, getRecipe } from '../../services/recipeServices';
import useTitleChange from '../../hooks/useTitleChange';
import GoToTop from '../../util/GoToTop';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
      .then((result) => {
        //console.log(result);
        setRecipes(result);
      })
      .catch((err) => console.log(err));
  }, []);

  useTitleChange('Home');

  function recipeOfTheDay() {
    const date = new Date();
    // console.log(date.getDate());

    let randomNumber = Math.floor(Math.random() * recipes.length + 1);
    // console.log(randomNumber);
    return recipes.splice(randomNumber - 1, 1);
    // console.log(randomRecipe);
    // if (randomNumber + 3 >= recipes.length) {
    //   let newRandomNumber = randomNumber - 3;
    //   this.myRecipes = recipes.splice(newRandomNumber, 4);
    // } else {
    //   this.myRecipes = recipes.splice(randomNumber, 4);
    // }
  }

  function homeCatalogRecipes() {
    let catalogRecipes = [];

    let randomNumber = Math.floor(Math.random() * recipes.length + 1);

    if (randomNumber + 5 >= recipes.length) {
      let newRandomNumber = randomNumber - 5;
      catalogRecipes = recipes.splice(newRandomNumber, 6);
    } else {
      catalogRecipes = recipes.splice(randomNumber, 6);
    }

    return catalogRecipes;
  }

  return (
    <>
      <section className='hero-banner'>
        {/* <img
            sizes="(max-width: 1920px) 100vw, 1920px"
            srcset="
            background-recipes_lflgqk_c_scale,w_600.jpg 600w,
            background-recipes_lflgqk_c_scale,w_1048.jpg 1048w,
            background-recipes_lflgqk_c_scale,w_1377.jpg 1377w,
            background-recipes_lflgqk_c_scale,w_1683.jpg 1683w,
            background-recipes_lflgqk_c_scale,w_1920.jpg 1920w"
            src="background-recipes_lflgqk_c_scale,w_1920.jpg"
            alt=""> */}
        <div className='hero-text'>
          <h1>БЕЗБРОЙ РЕЦЕПТИ ЗА ВСЕКИ ВКУС!</h1>
          <p>НАД 1500+ РЕЦЕПТИ </p>
        </div>
      </section>
      <div className='recipe-of-day container'>
        <div className='header-recipe'>
          <h2>ОТ КУХНЯТА</h2>
        </div>
        <DayRecipeCard {...recipeOfTheDay()} />
      </div>
      <hr />
      <section className='container catalog-home-page'>
        <CatalogHomePage recipes={homeCatalogRecipes()} />
      </section>
      <hr />
      <section className='top-recipes-home-page'></section>
      <GoToTop />
    </>
  );
}
