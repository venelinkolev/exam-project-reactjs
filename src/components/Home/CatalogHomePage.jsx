import { Link } from 'react-router-dom';
import './CatalogHomePage.css';
import ReciepNameAndPicture from './ReciepNameAndPicture';
import CatalogPage from '../Catalog/CatalogPage';

export default function CatalogHomePage() {
  return (
    <>
      <article className='catalog-home-page'>
        <h2>КАТАЛОГ</h2>
        <p>
          Може да разгледате малка част от нашите рецепти. Всички рецепти може
          да разгледате в нашия <Link to='/catalog'>Каталог</Link>.
        </p>
      </article>
      <div className='recipes-catalog'>
        <ReciepNameAndPicture />
      </div>
    </>
  );
}
