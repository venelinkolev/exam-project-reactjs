import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar(prop) {
  const { userContextValues, openProfileModal, logoutHendler } = prop;
  return (
    <>
      <div className='nav-menu-desktop'>
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
          {userContextValues.userInfo?.isUser && (
            <>
              <li>
                <Link to='/create'>Създаване</Link>
              </li>
              <li>
                <Link to='/my-recipes'>Мой Рецепти</Link>
              </li>
              <li>
                <div className='profile-desktop'>
                  <Link>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
                    </svg>
                    <span>Profil</span>
                  </Link>
                  <ul className='profile-desktop-info'>
                    <li onClick={openProfileModal}>
                      <Link>{userContextValues.userInfo.userName}</Link>
                    </li>
                    <li>
                      <Link to={'/home'} onClick={logoutHendler}>
                        Изход
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          )}
          {!userContextValues.userInfo?.isUser && (
            <>
              <li>
                <Link to='/login'>Вход</Link>
              </li>
              <li>
                <Link to='/register'>Регистрация</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
