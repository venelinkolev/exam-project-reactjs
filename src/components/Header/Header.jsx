import './Header.css';

export default function Header() {
  return (
    <>
      <header className='header'>
        <div className='logo'>
          <img src='/recipes.png' alt='Recipes Logo' />
        </div>
        <div className='menu-icon'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
            <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
          </svg>
        </div>
        <div className='nav-menu'>
          <ul>
            <li>
              <a href='#'>Начало</a>
            </li>
            <li>
              <a href='#'>Каталог</a>
            </li>
            <li>
              <a href='#'>Търси</a>
            </li>
            <li>
              <a href='#'>Вход</a>
            </li>
            <li>
              <a href='#'>Регистрация</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
