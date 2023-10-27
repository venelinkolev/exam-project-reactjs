import './Home.css';

export default function Home() {
  return (
    <>
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
          <h1>БЕЗБРОЙ РЕЦЕПТИ ЗА ВСЕКИ ВКУС!</h1>
          <p>НАД 1500+ РЕЦЕПТИ </p>
        </div>
      </section>
      <section className='day-recipe container'>
        <article>
          <h2>Зеленчукова запеканка с яйца и кашкавал</h2>
          <p>
            Обелваме картофите и ги режем на четири. Слагаме ги да се варят като
            добавяме сол във водата. Докато картофите се варят нарязваме лука,
            морковите и чушките на ситно. Добавяме сол, черен пипер и скилидките
            чесън.
          </p>
          <a href='#'>Детайли</a>
        </article>
        <div className='img'>
          <img src='' alt='Image' />
        </div>
      </section>
      <section className='catalog'></section>
      <section className='top-recipes'></section>
    </>
  );
}
