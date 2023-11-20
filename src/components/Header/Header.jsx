import { Link } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function Header() {
  const userContextValues = useContext(UserContext);

  console.log(userContextValues);

  return (
    <>
      <header className='header'>
        <div className='logo'>
          <Link to='/home'>
            <img src='/recipes.png' alt='Recipes Logo' />
          </Link>
        </div>
        <div className='menu-icon'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
            <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
          </svg>
        </div>
        <div className='nav-menu'>
          <ul>
            <li>
              <Link to='/home'>Начало</Link>
            </li>
            <li>
              <Link to='/catalog'>Каталог</Link>
            </li>
            <li>
              <Link to='/search'>Търси</Link>
            </li>
            <li>
              <Link to='/create'>Създаване</Link>
            </li>
            <li>
              <Link to='/my-recipes'>Мой Рецепти</Link>
            </li>
            <li>
              <Link to='/login'>Вход</Link>
            </li>
            <li>
              <Link to='/register'>Регистрация</Link>
            </li>
            <li>
              <Link to='/logout'>Изход</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
