import { Link } from 'react-router-dom';
import './CatalogHomePage.css';
import ReciepNameAndPicture from './ReciepNameAndPicture';

export default function CatalogHomePage(prop) {
  // console.log(prop.recipes);

  return (
    <>
      <article className='catalog-home'>
        <h2>КАТАЛОГ</h2>
        <p>
          Може да разгледате малка част от нашите рецепти. Всички рецепти може
          да разгледате в нашия<Link to='/catalog'>Каталог</Link>.
        </p>
      </article>
      <div className='recipes-catalog'>
        {prop.recipes.map((recipe) => (
          <ReciepNameAndPicture key={recipe._id} {...recipe} />
        ))}
      </div>
    </>
  );
}
