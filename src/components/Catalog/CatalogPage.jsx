import useTitleChange from '../../util/useTitleChange';
import './CatalogPage.css';

export default function CatalogPage() {
  useTitleChange('Catalog');
  return (
    <>
      <div className='main'>
        <p>Catalog</p>
      </div>
    </>
  );
}
