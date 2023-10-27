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
      <section className='hero-banner'>
        {/* <img
            sizes="(max-width: 1920px) 100vw, 1920px"
            srcset="
            background-recipes_lflgqk_c_scale,w_600.jpg 600w,
            background-recipes_lflgqk_c_scale,w_1048.jpg 1048w,
            background-recipes_lflgqk_c_scale,w_1377.jpg 1377w,
            background-recipes_lflgqk_c_scale,w_1683.jpg 1683w,
            background-recipes_lflgqk_c_scale,w_1920.jpg 1920w"
            src="background-recipes_lflgqk_c_scale,w_1920.jpg"
            alt=""> */}
        <div className='hero-text'>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            cumque maiores perspiciatis ex laudantium itaque, cum, facere at
            cupiditate aut amet, quasi ipsum in! Eveniet aspernatur rerum omnis
            ullam distinctio?
          </h1>
        </div>
      </section>
    </>
  );
}
