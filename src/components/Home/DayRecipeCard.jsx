import './DayRecipeCard.css';

import { short } from '../../util/shortDescription';
import { Link } from 'react-router-dom';

export default function DayRecipeCard(prop) {
  const recipe = prop[0];

  const description = short(recipe?.ingredients);
  // console.log(description);
  return (
    <>
      <section className='day-recipe'>
        <article>
          <h2>{recipe?.recipeName}</h2>
          <p>{description}...</p>
          <Link to={`/catalog/${recipe?._id}/details`}>Детайли</Link>
        </article>
        <div className='img'>
          <img src={recipe?.imageUrl} alt='Image' />
        </div>
      </section>
    </>
  );
}
