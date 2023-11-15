import './DayRecipeCard.css';
export default function DayRecipeCard(prop) {
  const recipe = prop[0];
  return (
    <>
      <section className='day-recipe'>
        <article>
          <h2>{recipe?.recipeName}</h2>
          <p>{recipe?.ingredients}</p>
          <a href='#'>Детайли</a>
        </article>
        <div className='img'>
          <img src={recipe?.imageUrl} alt='Image' />
        </div>
      </section>
    </>
  );
}
