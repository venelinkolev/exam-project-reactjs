import CatalogHomePage from './CatalogHomePage';
import DayRecipeCard from './DayRecipeCard';
import './Home.css';

export default function Home() {
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
        <div className='header-section'>
          <h2>РЕЦЕПТА НА ДЕНЯ</h2>
        </div>
        <DayRecipeCard />
      </div>
      <hr />
      <section className='catalog-home-page container'>
        <CatalogHomePage />
      </section>
      <hr />
      <section className='top-recipes-home-page'></section>
    </>
  );
}
