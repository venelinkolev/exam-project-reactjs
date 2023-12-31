import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className='footer-container'>
        <div className='info container'>
          <section className='about-as'>
            <h2>За нас</h2>
            <p>
              Ние сме ценители на кулинарното изкуство. С приятелите ни обичаме
              често да си споделяме различни рецепти. Както и да изпробваме нещо
              ново всеки път. Причината да направим този сайт е точно тази, да
              споделяме рецепти. Бон Апетит!
            </p>
          </section>
          <section className='menu'>
            <h2>Меню</h2>
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
                <Link to='/login'>Вход</Link>
              </li>
              <li>
                <Link to='/register'>Регистрация</Link>
              </li>
            </ul>
          </section>
          <section className='useful-links'>
            <h2>Полезни линкове</h2>
            <ul>
              <li>
                <a href='http://gmail.com' target='_blank'>
                  Gmail
                </a>
              </li>
              <li>
                <a href='http://yahoo.com' target='_blank'>
                  Yahoo
                </a>
              </li>
              <li>
                <a href='http://facebook.com' target='_blank'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='http://x.com' target='_blank'>
                  X
                </a>
              </li>
            </ul>
          </section>
          <section className='contact-us'>
            <h2>Контакти</h2>
            <p>Адрес: гр. Несебър, ул. Л. Каравелов №24</p>
            <p>Телефон: +359 0888 123 456</p>
            <p>Е-поща: venelinkolev@gmail.com</p>
          </section>
        </div>
      </footer>
      <div className='copyrights container'>
        <p>2023 All Rights Reserved ©. Design by Venelin Kolev.</p>
      </div>
    </>
  );
}
