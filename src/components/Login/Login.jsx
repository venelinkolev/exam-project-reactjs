import './Login.css';

export default function Login() {

  function loginUser(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <>
      <div className='login-container'>
        <div className='login-user'>
          <h1>Вход потребител</h1>
          <form onSubmit={loginUser}>
            <div className='login-form-container'>
              <label htmlFor='recipeName'>Заглавие:</label>
              <input
                type='text'
                id='recipeName'
                name='recipeName'
                placeholder='Наименование на рецептата'
                // value={formValues.recipeName}
                // onChange={changeFormHandler}
              />
              <label htmlFor='imageUrl'>Зареди снимка:</label>
              <input
                type='text'
                id='imageUrl'
                name='imageUrl'
                placeholder='http://... или https://...'
                // value={formValues.imageUrl}
                // onChange={changeFormHandler}
              />
            </div>
            <input type='submit' value='Създай' />
          </form>
        </div>
      </div>
    </>
  );
}
