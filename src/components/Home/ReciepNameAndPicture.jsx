import { Link } from 'react-router-dom';
import './ReciepNameAndPicture.css';

export default function ReciepNameAndPicture(prop) {
  // console.log(prop);
  return (
    <>
      <div className='card'>
        <div className='recipe-name'>
          <Link to={`/catalog/${prop._id}/details`}>
            <h3>{prop.recipeName}</h3>
          </Link>
        </div>
        <div className='recipe-picture'>
          <Link to={`/catalog/${prop._id}/details`}>
            <img src={prop.imageUrl} alt={prop.recipeName} />
          </Link>
        </div>
      </div>
    </>
  );
}
