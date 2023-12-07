import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { logout } from '../../services/userServices';
import { ServerErrorHandlerContext } from '../../contexts/ServerErrorHandlerContext';
import Profile from '../Profile/Profile';
import NavBar from '../NavBar/NavBar';

export default function Header() {
  const userContextValues = useContext(UserContext);
  const errorContextValues = useContext(ServerErrorHandlerContext);
  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  function openProfileModal() {
    setShowMenu(false);
    setShowProfile(true);
  }

  function closeProfileModal() {
    setShowProfile(false);
  }

  function menuShowOrHide() {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  }

  return (
    <>
      <header className='header'>
        <div className='logo'>
          <Link to='/home'>
            <img src='/recipes.png' alt='Recipes Logo' />
          </Link>
        </div>
        <div
          className='nav-menu'
          style={showMenu ? { display: 'block' } : { display: 'none' }}
        >
          <ul>
            <li onClick={menuShowOrHide}>
              <Link to='/home'>Начало</Link>
            </li>
            <li onClick={menuShowOrHide}>
              <Link to='/catalog'>Каталог</Link>
            </li>
            <li onClick={menuShowOrHide}>
              <Link to='/search'>Търси</Link>
            </li>
            {userContextValues.userInfo?.isUser && (
              <>
                <li onClick={menuShowOrHide}>
                  <Link to='/create'>Създаване</Link>
                </li>
                <li onClick={menuShowOrHide}>
                  <Link to='/my-recipes'>Мой Рецепти</Link>
                </li>
                <li>
                  <div className='profil'>
                    <Link>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 448 512'
                      >
                        <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
                      </svg>
                      <span>Profil</span>
                    </Link>
                    <ul className='profil-info'>
                      <li onClick={openProfileModal}>
                        <Link>{userContextValues.userInfo.userName}</Link>
                      </li>
                      <li onClick={menuShowOrHide}>
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
                <li onClick={menuShowOrHide}>
                  <Link to='/login'>Вход</Link>
                </li>
                <li onClick={menuShowOrHide}>
                  <Link to='/register'>Регистрация</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className='menu-icon' onClick={menuShowOrHide}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
            <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
          </svg>
        </div>
        <div className='nav-bar-desktop'>
          <NavBar
            userContextValues={userContextValues}
            openProfileModal={openProfileModal}
            logoutHendler={logoutHendler}
          />
        </div>
        {showProfile && (
          <div className='profile-modal'>
            <Profile closeProgileModal={closeProfileModal} />
          </div>
        )}
      </header>
    </>
  );
}
