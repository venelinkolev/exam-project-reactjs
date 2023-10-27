import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className='footer-container'>
        <div className='info container'>
          <section className='about-as'>
            <h2>За нас</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium a voluptates, eos alias, consequatur illo tempore
              reprehenderit aliquam recusandae nesciunt nobis, libero veritatis.
              Quidem, consequatur suscipit nulla repellendus odio molestiae.
            </p>
          </section>
          <section className='menu'>
            <h2>Меню</h2>
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
            <p>Адрес:</p>
            <p>Телефон:</p>
            <p>Е-поща:</p>
          </section>
        </div>
      </footer>
      <div className='copyrights container'>
        <p>2023 All Rights Reserved ©. Design by Venelin Kolev.</p>
      </div>
    </>
  );
}
