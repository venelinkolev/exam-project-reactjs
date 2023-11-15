import './DayRecipeCard.css';

import { short } from '../../util/shortDescription';

export default function DayRecipeCard(prop) {
  const recipe = prop[0];

  const description = short(recipe?.ingredients);
  console.log(description);
  return (
    <>
      <section className='day-recipe'>
        <article>
          <h2>{recipe?.recipeName}</h2>
          <p>{description}...</p>
          <a href='#'>Детайли</a>
        </article>
        <div className='img'>
          <img src={recipe?.imageUrl} alt='Image' />
        </div>
      </section>
    </>
  );
}
