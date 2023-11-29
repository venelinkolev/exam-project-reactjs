import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { logout } from '../../services/userServices';
import { ServerErrorHandlerContext } from '../../contexts/ServerErrorHandlerContext';

export default function Header() {
  const userContextValues = useContext(UserContext);
  const errorContextValues = useContext(ServerErrorHandlerContext);

  const navigate = useNavigate();

  // console.log(userContextValues);

  async function logoutHendler(e) {
    // console.log(e);
    e.preventDefault();

    if (!userContextValues.userInfo.isUser) {
      return;
    }

    //console.log('Logout');

    userContextValues.userData({
      userName: '',
      isUser: false,
      userId: '',
    });

    localStorage.removeItem('authToken');

    try {
      await logout();

      navigate('/home');
    } catch (error) {
      errorContextValues.changeErrors({
        type: 'Error',
        message: error.message,
      });
    }
  }

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
            {userContextValues.userInfo?.isUser && (
              <>
                <li>
                  <Link to='/create'>Създаване</Link>
                </li>
                <li>
                  <Link to='/my-recipes'>Мой Рецепти</Link>
                </li>
                <li>
                  <div className='profil'>
                    <Link to={'/profil'}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                      >
                        <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
                      </svg>
                      <span>Profil</span>
                    </Link>
                    <ul className='profil-info'>
                      <li>
                        <Link to={'/profil'}>
                          {userContextValues.userInfo.userName}
                        </Link>
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
      </header>
    </>
  );
}
