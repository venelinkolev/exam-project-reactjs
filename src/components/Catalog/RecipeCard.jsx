import { Link } from 'react-router-dom';
import './RecipeCard.css';

export default function RecipeCard(prop) {
  console.log(prop);
  return (
    <div className='recipe-card-main'>
      <div className='recipe-image'>
        <img src={prop.imageUrl} alt={prop.recipeName} />
      </div>
      <h2>{prop.recipeName}</h2>
      <Link to={`/catalog/${prop._id}/details`}>Детайли</Link>
    </div>
  );
}
