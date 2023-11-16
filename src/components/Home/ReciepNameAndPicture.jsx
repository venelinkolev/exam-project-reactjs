import './ReciepNameAndPicture.css';

export default function ReciepNameAndPicture(prop) {
  // console.log(prop);
  return (
    <>
      <div className='card'>
        <div className='recipe-name'>
          <h3>{prop.recipeName}</h3>
        </div>
        <div className='recipe-picture'>
          <img src={prop.imageUrl} alt={prop.recipeName} />
        </div>
      </div>
    </>
  );
}
