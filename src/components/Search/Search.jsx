import useTitleChange from '../../hooks/useTitleChange';
import GoToTop from '../../util/GoToTop';
import './Search.css';

export default function Search() {
  useTitleChange('Search');
  return (
    <>
      <h1>Search</h1>
      <GoToTop />
    </>
  );
}
