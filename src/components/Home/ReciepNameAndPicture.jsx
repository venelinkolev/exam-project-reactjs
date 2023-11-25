import { Link } from 'react-router-dom';
import './ReciepNameAndPicture.css';

export default function ReciepNameAndPicture(prop) {
  // console.log(prop);
  return (
    <>
      <div className='card'>
        <div className='recipe-name'>
          <h3>
            <Link to={`/catalog/${prop._id}/details`}>{prop.recipeName}</Link>
          </h3>
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
