import './Header.css';

export default function Header() {
  return (
    <>
      <header className='header'>
        <div className='logo'>
          <img src='/recipes.png' alt='Recipes Logo' />
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
